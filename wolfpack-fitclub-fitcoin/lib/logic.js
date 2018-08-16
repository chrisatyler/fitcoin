/**
 * A member can receive points for different activities
 * @param {org.fitclub.fitcoin.ReceiveFitCoins} receiveFitCoins - the points being received
 * @transaction
 * 
 * A member can only receive points if they are currently active
 * A member can receive points for activities such as using the treadmill, playing raquetball, swimming, or attending a class
 */

function receiveFitCoins (receiveFitCoins) {
    var member = receiveFitCoins.member;
    var fitCoinsReceived = receiveFitCoins.fitCoinQuantity;
    var memberStatus = member.memberStatus;

    console.log('Member; ' + member.personFirstName + ' ' + member.personLastName + ' received ' + fitCoinsReceived.toString());

    if (memberStatus === 'ACTIVE') {
        member.fitCoinWallet.fitCoinBalance+=fitCoinsReceived;
        console.log('Member is active');
    } else {
    		console.log('Member is inactive');
    }
    
    console.log('Member balance is now ' + member.fitCoinWallet.fitCoinBalance);

    return getAssetRegistry('org.fitclub.fitcoin.FitCoinWallet')
    .then(function (memberFitCoinWalletRegistry) {
        // update the member's fitcoin balance
        return memberFitCoinWalletRegistry.update(member.fitCoinWallet);
    });

}

/**
 * A member can redeem FitCoins for merchandise or services
 * @param {org.fitclub.fitcoin.RedeemFitCoins} redeemFitCoins - the FitCoins redeemed
 * @transaction
 * 
 * A member can only redeem FitCoins if they have sufficient balance in their account and they are active
 */

function redeemFitCoins (redeemFitCoins) {
    var member = redeemFitCoins.member;
    //var memberWallet = member.fitCoinWallet;
    var storeOwner = redeemFitCoins.storeOwner;
    //var storeOwnerWallet = storeOwner.fitCoinWallet;
    var fitCoinsBeingRedeemed = redeemFitCoins.fitCoinQuantity;
    var memberStatus = member.memberStatus;
    var memberCoinBalance = member.fitCoinWallet.fitCoinBalance;
    console.log('Member; ' + member.personFirstName + ' ' + member.personLastName + ' is redeeming ' + fitCoinsBeingRedeemed.toString());

    if (memberStatus === 'ACTIVE') {
        console.log('Member is active');
        if (memberCoinBalance >= fitCoinsBeingRedeemed) {
        		console.log('Member has sufficient points');
        		member.fitCoinWallet.fitCoinBalance-=fitCoinsBeingRedeemed;
                storeOwner.fitCoinWallet.fitCoinBalance+=fitCoinsBeingRedeemed;
        } else {
        		console.log('Member has insufficient points');
                throw new Error('Member has insufficient FitCoins');
        }
    } else {
    		console.log('Member is inactive');
            throw new Error('Member is inactive');
    }
    
    console.log('Member balance is now ' + member.fitCoinWallet.fitCoinBalance);

    return getAssetRegistry('org.fitclub.fitcoin.FitCoinWallet')
    .then(function (memberWalletRegistry) {
        // update the member's FitCoin balance
        return memberWalletRegistry.update(member.fitCoinWallet);
    })
    .then(function() {
      return getAssetRegistry('org.fitclub.fitcoin.FitCoinWallet')
    })
	.then(function(storeOwnerWalletRegistry) {
        // update the store owner's FitCoin balance
      	return storeOwnerWalletRegistry.update(storeOwner.fitCoinWallet);
    });
}

/**
 * Add a new club
 * @param {org.fitclub.fitcoin.AddClub} club - the member being added
 * @transaction
 * 
 * A club is added to the registry and associated to the clubOwner
 */

function addClub (club) {
	
    return getParticipantRegistry('org.fitclub.fitcoin.Club')
    .then(function (clubRegistry) {
        var factory = getFactory();
        // Create the bond asset.
        var newClub = factory.newResource('org.fitclub.fitcoin', 'Club', club.clubId);
        newClub.clubName = club.clubName;
        newClub.clubOwner = factory.newRelationship('org.fitclub.fitcoin','ClubOwner', club.clubOwner);
        // Add the bond asset to the registry.
        return clubRegistry.add(newClub);
    });
}

/**
 * Add a new member
 * @param {org.fitclub.fitcoin.AddClubOwner} clubOwner - the member being added
 * @transaction
 * 
 * A clubOwner is added to the registry 
 */

function addClubOwner (clubOwner) {
	
    return getParticipantRegistry('org.fitclub.fitcoin.ClubOwner')
    .then(function (clubOwnerRegistry) {
        var factory = getFactory();
        // Create the ClubOwner.
        var newClubOwner = factory.newResource('org.fitclub.fitcoin', 'ClubOwner', clubOwner.clubOwnerId);
        newClubOwner.personFirstName = clubOwner.clubOwnerFirstName;
        newClubOwner.personLastName = clubOwner.clubOwnerLastName;
        // Add the ClubOwner to the registry.
        return clubOwnerRegistry.add(newClubOwner);
    });
}

/**
 * Add a new member
 * @param {org.fitclub.fitcoin.AddMember} member - the member being added
 * @transaction
 * 
 * A member is added to the registry and seeded with 100 FitCoins and their status is set to Active
 */

function addMember (member) {
	
  return getAssetRegistry('org.fitclub.fitcoin.FitCoinWallet')
    .then(function(fitCoinWalletRegistry) {
    var factory = getFactory();
    var newFitCoinWallet = factory.newResource('org.fitclub.fitcoin','FitCoinWallet',member.memberId);
    newFitCoinWallet.fitCoinBalance = 100;
    return fitCoinWalletRegistry.add(newFitCoinWallet);
  })
    .then(function() {
    return getParticipantRegistry('org.fitclub.fitcoin.Member')
  })
    .then(function (memberRegistry) {
    var factory = getFactory();
    var newMember = factory.newResource('org.fitclub.fitcoin', 'Member', member.memberId);
    newMember.personFirstName = member.memberFirstName;
    newMember.personLastName = member.memberLastName;
    //newMember.fitCoinBalance = 100;
    newMember.memberStatus = 'ACTIVE';
    newMember.club = factory.newRelationship('org.fitclub.fitcoin','Club', member.club);
    newMember.fitCoinWallet = factory.newRelationship('org.fitclub.fitcoin','FitCoinWallet',member.memberId);
    return memberRegistry.add(newMember);
  });

}

/**
 * Add a new store owner
 * @param {org.fitclub.fitcoin.AddStoreOwner} storeOwner - the store owner being added
 * @transaction
 * 
 * A store owner is added to the registry
 */

function addStoreOwner (storeOwner) {
	
  return getAssetRegistry('org.fitclub.fitcoin.FitCoinWallet')
  	.then(function(assetRegistry) {
      var factory = getFactory();
      var newFitCoinWallet = factory.newResource('org.fitclub.fitcoin','FitCoinWallet',storeOwner.storeOwnerId);
      newFitCoinWallet.fitCoinBalance = 0;
      return assetRegistry.add(newFitCoinWallet);
    })    
    .then(function() {
      return getParticipantRegistry('org.fitclub.fitcoin.StoreOwner');
    })
    .then(function (storeOwnerRegistry) {
      var factory = getFactory();
      var newStoreOwner = factory.newResource('org.fitclub.fitcoin', 'StoreOwner', storeOwner.storeOwnerId);
      newStoreOwner.personFirstName = storeOwner.storeOwnerFirstName;
      newStoreOwner.personLastName = storeOwner.storeOwnerLastName;
      newStoreOwner.storeName = storeOwner.storeName;
      newStoreOwner.club = factory.newRelationship('org.fitclub.fitcoin','Club', storeOwner.club);
      newStoreOwner.fitCoinWallet = factory.newRelationship('org.fitclub.fitcoin','FitCoinWallet',storeOwner.storeOwnerId);
      return storeOwnerRegistry.add(newStoreOwner);
    });
}

/**
 * Inactivate a member
 * @param {org.fitclub.fitcoin.InactivateMember} inactiveMember - the member being inactivated
 * @transaction
 * 
 * A member's status is set to 'INACTIVE'
 */

function inactivateMember (inactiveMember) {
	var member = inactiveMember.member;
	member.memberStatus = 'INACTIVE';
	
    return getParticipantRegistry('org.fitclub.fitcoin.Member')
    .then(function (memberRegistry) {
        return memberRegistry.update(member);
    });
}

/**
 * Initialize some test assets and participants useful for running a demo.
 * @param {org.fitclub.fitcoin.SetupDemo} setupDemo - the SetupDemo transaction
 * @transaction
 */
function setupDemo(setupDemo) {

    var factory = getFactory();
    var NS = 'org.fitclub.fitcoin';

    // create the owner
    var clubOwner = factory.newResource(NS, 'ClubOwner', 'OWNER_001');
    clubOwner.personFirstName = "Alex";
    clubOwner.personLastName = "Josephs";

    // create the club
    var club = factory.newResource(NS, 'Club', 'CLUB_001');
    club.clubOwner = factory.newRelationship(NS, 'ClubOwner', "OWNER_001");
    club.clubName = 'WolfPack Elite';

    // create the wallets
    var wallet = [
      factory.newResource(NS, 'FitCoinWallet', 'STORE_001'),
      factory.newResource(NS, 'FitCoinWallet', 'STORE_002'),
      factory.newResource(NS, 'FitCoinWallet', 'MEMBER_001'),
      factory.newResource(NS, 'FitCoinWallet', 'MEMBER_002'),
      factory.newResource(NS, 'FitCoinWallet', 'MEMBER_003')
    ];
    wallet[0].fitCoinBalance = 0;
    wallet[1].fitCoinBalance = 0;
    wallet[2].fitCoinBalance = 100;
    wallet[3].fitCoinBalance = 100;
    wallet[4].fitCoinBalance = 100;
  
    // create the stores
    var store = [
      factory.newResource(NS, 'StoreOwner', 'STORE_001'),
      factory.newResource(NS, 'StoreOwner', 'STORE_002')
    ];
    store[0].storeName = 'Protein Up';
    store[0].personFirstName = 'Dan';
    store[0].personLastName = 'de Grazia';
    store[0].fitCoinWallet = factory.newRelationship(NS, 'FitCoinWallet', 'STORE_001');
    store[0].club = factory.newRelationship(NS, 'Club', 'CLUB_001');

    store[1].storeName = "Lou's Fitness Clothing";
    store[1].personFirstName = 'Lou';
    store[1].personLastName = 'Frolio';
    store[1].fitCoinWallet = factory.newRelationship(NS, 'FitCoinWallet', 'STORE_002');
    store[1].club = factory.newRelationship(NS, 'Club', 'CLUB_001');

    // create the members
    var member = [
      factory.newResource(NS, 'Member', 'MEMBER_001'),
      factory.newResource(NS, 'Member', 'MEMBER_002'),
      factory.newResource(NS, 'Member', 'MEMBER_003')
    ];

    member[0].personFirstName = 'Chris';
    member[0].personLastName = 'Tyler';
    member[0].memberStatus = 'ACTIVE';
    member[0].fitCoinWallet = factory.newRelationship(NS, 'FitCoinWallet', 'MEMBER_001');
    member[0].club = factory.newRelationship(NS, 'Club', 'CLUB_001');

    member[1].personFirstName = 'Darrel';
    member[1].personLastName = 'Pyle';
    member[1].memberStatus = 'ACTIVE';
    member[1].fitCoinWallet = factory.newRelationship(NS, 'FitCoinWallet', 'MEMBER_002');
    member[1].club = factory.newRelationship(NS, 'Club', 'CLUB_001');

    member[2].personFirstName = 'Ashley';
    member[2].personLastName = 'Troggio';
    member[2].memberStatus = 'ACTIVE';
    member[2].fitCoinWallet = factory.newRelationship(NS, 'FitCoinWallet', 'MEMBER_003');
    member[2].club = factory.newRelationship(NS, 'Club', 'CLUB_001');

    return getParticipantRegistry(NS + '.ClubOwner')
        .then(function (clubOwnerRegistry) {
            // add the clubOwner
            return clubOwnerRegistry.addAll([clubOwner]);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.Club');
        })
        .then(function(clubRegistry) {
            // add the club
            return clubRegistry.addAll([club]);
       })
        .then(function() {
            return getAssetRegistry(NS + '.FitCoinWallet');
        })
        .then(function(walletRegistry) {
            // add the wallets
            return walletRegistry.addAll(wallet);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.StoreOwner');
        })
        .then(function(storeRegistry) {
            // add the shippers
            return storeRegistry.addAll(store);
        })
        .then(function() {
            return getParticipantRegistry(NS + '.Member');
        })
        .then(function(memberRegistry) {
            // add the shippers
            return memberRegistry.addAll(member);
        });
}
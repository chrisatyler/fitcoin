# The Fitcoin Blockchain Network

This is the definition of the Hyperledger Fabric and Composer blockchain network. Hyperledger models consist of a few components.

1. Model Files (.cto) which contains the definition of the following: 
    
    a. Assets - the items that are owned and traded

    b. Participants - the people or organizations that own and transact on assets

    c. Transactions - the structure of the data elements passed in on a transaction

    d. Events - alerts or notifications that participants can subscribe to to know when things happen

2. Script Files (.js) which contain the smart contract logic. In this case there are a few types of transactions with smart contracts

    a. AddMember - When a new member is added, they are given a seed of 100 Fitcoins and their status is set to Active

    b. Receive Fitcoins - When a member is being given Fitcoins, they must be active

    c. Redeem Fitcoins - When a member is redeeming Fitcoins, they must be active and they must have a sufficient balance to redeem the requested Fitcoins

    d. Inactivate Member - When a member is inactivated, they are set to inactive and the system will not allow them to receive or redeem Fitcoins

3. Permission Files (.acl) which define the security permissions. In this case, there are no permissions yet.

4. Query Files (.qry) which define the logic to access data from the blockchain. There is no direct query mechanism besides Query Files through Composer.

This directory contains all of the appropriate files to buld the blockchain network archive which can be deployed to a Hyperledger Fabric / Composer environment.

## Before you begin
---

Make sure you have installed the required pre-requisites, following the instructions in [Installing pre-requisites](../README.md).

## Build the network archive (bna file)
---
From within the wolfpack-fitclub-fitcoin directory, run the following command:
```
npm install
```
This will install all of the necessary modules and will run the build script to build the network archive.

The network archive will be placed in a ./dist/ directory as wolfpack-fitclub-fitcoin.bna. 

## Deploy the blockchain business network archive
---
In order to use the definition, it must be deployed to the Hyperledger Fabric engine. From the ./wolfpack-fitclub-fitcoin/dist directory, run the following commands.

```
composer network install --archiveFile wolfpack-fitclub-fitcoin.bna --card PeerAdmin@hlfv1

composer network start --networkName wolfpack-fitclub-fitcoin --networkVersion 0.0.2 --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw
```

## Create the Composer Card to connect to the network
---
From the command line, enter
```
composer card create -n wolfpack-fitclub-fitcoin -p ../../fabric-dev-servers/DevServer_connection.json -u admin -s adminpw
```
You should see this:

```
Successfully created business network card file to 
    Output file: admin@wolfpack-fitclub-fitcoin.card

Command succeeded
```
 ## Import the Composer Card into your Composer Wallet
---
```
composer card import -f admin@wolfpack-fitclub-fitcoin.card
```
You should see this:
```
Successfully imported business network card
	Card file: admin@wolfpack-fitclub-fitcoin.card
	Card name: admin@wolfpack-fitclub-fitcoin

Command succeeded
```

## Test the composer network is listening
---
From the command line, enter
```
composer network ping -c admin@wolfpack-fitclub-fitcoin
```

You should see something that looks like this
```
The connection to the network was successfully tested: wolfpack-fitclub-fitcoin
	Business network version: 0.0.2
	Composer runtime version: 0.20.0
	participant: org.hyperledger.composer.system.NetworkAdmin#admin
	identity: org.hyperledger.composer.system.Identity#6f8e156dde4d67f9c1c10cd4180b3fd5d9c7238b8039c306a7dc26a87eb74521

Command succeeded
```

## Start the Composer REST server
---

For the next step, we need the blockchain network accessible via REST API's. The Composer REST Server generates a set of API's based on the Composer Model.

From the command line, enter
```
composer-rest-server -p 3020 -c admin@wolfpack-fitclub-fitcoin -n never
```

## Load some sample data

There is a transaction to setup the demo with some data including:
1. A Club called WolfPack Elite
2. A few members
3. A few stores and products

To run the transaction to create the sample demo, run the following command.
```
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"$class":"org.fitclub.fitcoin.SetupDemo"}' 'http://localhost:3020/api/SetupDemo'
```

## Test that the data loaded

Run the following command 

```
curl -X GET --header 'Accept: application/json' 'http://localhost:3020/api/Member'
```

You should see some data returned in a json format that should look something like this:

```
[{"$class":"org.fitclub.fitcoin.Member","club":"resource:org.fitclub.fitcoin.Club#CLUB_001","memberStatus":"ACTIVE","personId":"MEMBER_001","personFirstName":"Chris","personLastName":"Tyler","fitCoinWallet":"resource:org.fitclub.fitcoin.FitCoinWallet#MEMBER_001"},{"$class":"org.fitclub.fitcoin.Member","club":"resource:org.fitclub.fitcoin.Club#CLUB_001","memberStatus":"ACTIVE","personId":"MEMBER_002","personFirstName":"Darrel","personLastName":"Pyle","fitCoinWallet":"resource:org.fitclub.fitcoin.FitCoinWallet#MEMBER_002"},{"$class":"org.fitclub.fitcoin.Member","club":"resource:org.fitclub.fitcoin.Club#CLUB_001","memberStatus":"ACTIVE","personId":"MEMBER_003","personFirstName":"Ashley","personLastName":"Troggio","fitCoinWallet":"resource:org.fitclub.fitcoin.FitCoinWallet#MEMBER_003"}]
```

Congratulations! You now have a working Blockchain with data.
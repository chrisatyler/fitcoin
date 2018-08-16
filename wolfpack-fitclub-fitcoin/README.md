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

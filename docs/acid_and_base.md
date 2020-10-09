---
id: acid_and_base
title: ACID vs. BASE Models
---

When it comes to non-relational databases, the consistency models of the data can be significantly different than found in relation databases or even different among different non-relation databases. When analyzing data in databases, there are two common consistency models used - ACID and BASE. So what are they and which do they apply to?


## ACID Consistency Model
The ACID consistency model is often brought up when working with **relational databases** as it is the bread and butter for SQL databases. Following ACID can provide a way to have a safe database environment to transact and operate on the data. The acronym means the following:

### Atomic
All operations complete successfully or none no data changes are made (Rollback)
### Consistent
After transaction is complete, data is in valid state (no validation rules broken)
### Isolated
Result of transaction operations are equivalent calling operations sequentially (DBs often don’t run these operations sequentially for optimization reasons, but the end result must be equivalent as if it did)
### Durable
Results of transaction are permanently stored at end of successful transaction

##

ACID properties mean that once a transaction is completed, the database data is consistent/stable on disk.

Write consistency is very important for transactions and engineers but require locking in order to be conducted properly. Possible future article on this - for now see what Google says.

![](../static/img/locking.png)

## BASE Consistency Model
For many domains and use cases, ACID transactions are far more pessimistic (i.e., they’re more worried about data safety) than the domain actually requires.

In the NoSQL database world, ACID transactions are less fashionable as some databases have loosened the requirements for immediate consistency, data freshness and accuracy in order to gain other benefits, like scale and resilience.

(Notably, the .NET-based RavenDB has bucked the trend among aggregate stores in supporting ACID transactions.)

Here’s how the BASE acronym breaks down:

### BAsic Availability
The database works most of the time.
### Soft-state
Stores don’t have to be write-consistent, nor do different replicas have to be mutually consistent all the time.
### Eventual consistency
Stores exhibit consistency at some later point


As far as BASE properties go, they are far looser than guarantees found in ACID. You cannot directly map & compare CAP vs. BASE since they technically concern themselves with different aspects of data store. The BASE data stores are more concerned with how available the DB is because that is a huge consideration at scale. The trade off is that it doesn't guarantee consistency of that replicated data at write time and in some cases read time.

Overall, the BASE consistency model provides a less strict assurance than ACID, saying that data will consistent in some near point in the future, but now has the ability to scale and be more available.

The BASE consistency model is predominately used in wide-column, key-value and document data stores. (See SQL vs. NoSQL)
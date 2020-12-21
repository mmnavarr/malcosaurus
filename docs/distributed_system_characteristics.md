---
id: distributed_system_characteristics
title: Characteristics
---


## Scalability
*Scalability is the capability of a system, process, or a network to grow and manage increased demand.*

A system may have to scale because of many reasons like increased data volume or increased amount of work, e.g., number of transactions. A scalable system would like to achieve this scaling without performance loss.


### Horizontal vs. Vertical Scaling
Horizontal scaling means that you scale by adding more servers into your pool of resources whereas Vertical scaling means that you scale by adding more power (CPU, RAM, Storage, etc.) to an existing server.

![](../static/img/horizontal_vs_vertical.svg)

Good examples of horizontal scaling provide an easy way to scale horizontally by adding more machines to meet growing needs.
E.g. [Cassandra](https://en.wikipedia.org/wiki/Apache_Cassandra)  or  [MongoDB](https://en.wikipedia.org/wiki/MongoDB) .

Good examples of vertical scaling is MySQL as it allows for an easy way to scale vertically by switching from smaller to bigger machines. **Vertical scaling usually involves downtime.**


## Reliability
*Reliability is the probability a system will fail in a given period.*

A distributed system is considered reliable if it keeps delivering its services even when one or several of its software or hardware components fail. Reliability represents one of the main characteristics of any distributed system, since in such systems any failing machine can always be replaced by another healthy one, ensuring the completion of the requested task.

## Availability
*Availability is the time a system remains operational to perform its required function in a specific period.*

It is a simple measure of the percentage of time that a system, service, or a machine remains operational under normal conditions.


## Reliability vs. Availability
Reliability = Availability / Time

If a system is reliable, it is available. However, if it is available, it is not necessarily reliable. In other words, high reliability contributes to high availability, but it is possible to achieve a high availability even with an unreliable product by minimizing repair time and ensuring that spares are always available when they are needed.

## Serviceability or Manageability
*Serviceability or manageability is the simplicity and speed with which a system can be repaired or maintained*

Things to consider for manageability are the ease of diagnosing and understanding problems when they occur, ease of making updates or modifications, and how simple the system is to operate (i.e., does it routinely operate without failure or exceptions?).
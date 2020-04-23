# Noi App

This project aims to create a contact tracing mobile based on the [DP-3T](https://github.com/DP-3T) standard, specifically aimed at the Italian population.

This standard is designed to be privacy respectful and does not share information, except anonymized data for voluntary disclosure by people who find themself infected. Those data can then be checked by the app to verify if you were in contact with someone infected.

Furthermore, this standard appears to be compatible with the upcoming API of Apple/Google for contact tracing.

The application in the current shape will be a React Native application, including as modules the DP-3T SDK, with a backend written in Java with Spring. The technology stack may change over time.

## Background

Disclaimer: if you find any incorrect information, please file an issue to let us provide the correct information.

An "official" Italian app is supposed to be being developed, although the status is unknown. What is known is that:

- a private company in Italy was selected to develop the application.
- we explicitly asked about the release of the source code, but no answer has been (yet) given.
- we were told informally that the source code would be released, but nothing official
- even if the code will be released, it is to be seen if what is released is complete enough and documented enough that can be reviewed by the community
- this company is a member of the  [PEPP-PT](https://github.com/pepp-pt/pepp-pt-documentation) organization, and it has been disclosed the app will use the PPPT-DT standard.
- the PEPP-PT organization is basically an invite-only organization. Nothing is known about how it works internally.  At the moment, no public source code has yet been released, although they declare the code to be Mozilla licensed.
- The standard PPPT-DP is also designed to include centralized control of contact information.
- In the last few days, the relationship among [PEPP-DP and DP-3T](https://twitter.com/mikarv/status/1250850682904760320?s=20) has gone awry, as any reference to DP-3T was removed from PEPP-DP.

## Rationale

For those reasons, whatever is the outcome of the development of the 'official' app, we believe it is required another app with  those goals:

- developed as an opensource project from the ground up 
- community-oriented, without any relationship with private organizations
- using the "alternative" standard D3PT (decentralized) as opposed to the PEPP-DP (centralized) standard
- able to be integrated with the upcoming APIs from Apple and Google.

We are currently working on making the DP3T app localized and available for Italy, and provide the server infrastructure.


DROP SCHEMA IF EXISTS ACP cascade;
CREATE SCHEMA ACP;
SET search_path TO ACP, public;

CREATE TABLE User(
	uID integer NOT NULL,
	userName varchar(10) NOT NULL,
	password varchar(13) NOT NULL,
	status varchar(10) NOT NULL,
	PRIMARY KEY(uID)
);

-- parent can be null
CREATE TABLE Product(
	pID integer NOT NULL,
	parent integer,
	dateIssued date NOT NULL,
	PRIMARY KEY(pID),
	FOREIGN KEY(parent) REFERENCES Product
);

-- the user with uID contributed to the product with pID
CREATE TABLE Contribution(
	pID integer NOT NULL,
	uID integer NOT NULL,
	PRIMARY KEY(pID, uID),
	FOREIGN KEY(pID) REFERENCES Product,
	FOREIGN KEY(uID) REFERENCES User
);

CREATE TABLE Archive(
	pID integer NOT NULL,
	archiveTime timestamp NOT NULL,
	PRIMARY KEY(pID, archiveTime),
	FOREIGN KEY(pID) REFERENCES Product
);

CREATE TABLE Comment(
	pID integer NOT NULL,
	uID integer NOT NULL,
	commentIssued timestamp NOT NULL,
	content varchar(100) NOT NULL,
	type varchar(10) NOT NULL,
	PRIMARY KEY(pID, uID, commentIssued),
	FOREIGN KEY(pID) REFERENCES Product,
	FOREIGN KEY(uID) REFERENCES User
);
Contact GitHub API Training Shop Blog About

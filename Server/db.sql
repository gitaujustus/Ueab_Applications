CREATE TABLE Accounts  (
  StudentId VARCHAR (20) PRIMARY KEY,
  FirstName VARCHAR(20) NOT NULL,
  LastName VARCHAR(20) NOT NULL,
  Email VARCHAR(30) NOT NULL
);
CREATE TABLE Supp (
  SuppId INT AUTO_INCREMENT PRIMARY KEY,
  StudentId VARCHAR(20) NOT NULL,
  Major VARCHAR(50) NOT NULL,
  CourseCode VARCHAR(20) NOT NULL,
  CourseTitle VARCHAR(30) NOT NULL,
  Credits INT NOT NULL,
  SemesterTaken VARCHAR(20) NOT NULL,
  CatGrade VARCHAR(20) NOT NULL,
  FinalGrade VARCHAR(30) NOT NULL,
  FOREIGN KEY (StudentId) REFERENCES Accounts(StudentId)
);



INSERT INTO `accounts` (StudentId, FirstName, LastName, Email)
VALUES
  ("SABCD1234", "John", "Doe", "sabcd1234@gmail.com"),
  ("SEFGH5678", "Jane", "Smith", "sefgh5678@gmail.com"),
  ("SIJKL9012", "Alice", "Johnson", "sijkl9012@gmail.com"),
  ("SMNOP3456", "Bob", "Brown", "smnop3456@gmail.com"),
  ("SQWXY7890", "Emily", "Davis", "sqwxy7890@gmail.com"),
  ("SZABC2345", "Michael", "Wilson", "szabc2345@gmail.com"),
  ("SXYZD6789", "Olivia", "Miller", "sxyzd6789@gmail.com"),
  ("SPQRS1234", "David", "Jones", "spqrs1234@gmail.com"),
  ("SUXYZ5678", "Ella", "Taylor", "suxyz5678@gmail.com"),
  ("SWXYZ9012", "Sarah", "Lee", "swxyz9012@gmail.com");

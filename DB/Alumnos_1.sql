CREATE TABLE [dbo].[Alumnos]
(
	[ID] INT NOT NULL  IDENTITY, 
    [Nombre] VARCHAR(50) NOT NULL, 
    [Legajo] INT NOT NULL, 
    [Edad] INT NOT NULL, 
    [FechaNacimiento] DATE NOT NULL, 
    CONSTRAINT [PK_Alumnos] PRIMARY KEY ([ID])
)

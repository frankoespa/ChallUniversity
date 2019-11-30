CREATE TABLE [dbo].[Alumnos]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Nombre] VARCHAR(50) NOT NULL, 
    [Legajo] INT NOT NULL, 
    [Edad] INT NOT NULL, 
    [Fecha_Nacimiento] DATE NOT NULL
)

CREATE TABLE [dbo].[Cursos]
(
	[ID] INT NOT NULL  IDENTITY, 
    [Asignatura] VARCHAR(50) NOT NULL, 
    [Capacidad_Max] INT NOT NULL, 
    [Docente] VARCHAR(50) NOT NULL, 
    CONSTRAINT [PK_Cursos] PRIMARY KEY ([ID]) 
)

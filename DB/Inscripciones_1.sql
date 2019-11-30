CREATE TABLE [dbo].[Inscripciones]
(
	[ID] INT NOT NULL  IDENTITY, 
    [AlumnoID] INT NOT NULL, 
    [CursoID] INT NOT NULL, 
    [FechaInscripcion] DATE NOT NULL, 
    [EstadoID] INT NOT NULL DEFAULT 1, 
    CONSTRAINT [PK_Inscripciones] PRIMARY KEY ([ID]), 
    CONSTRAINT [FK_Inscripciones_Alumnos] FOREIGN KEY ([AlumnoID]) REFERENCES [Alumnos]([ID]), 
    CONSTRAINT [FK_Inscripciones_Cursos] FOREIGN KEY ([CursoID]) REFERENCES [Cursos]([ID]), 
    CONSTRAINT [FK_Inscripciones_Estados] FOREIGN KEY ([EstadoID]) REFERENCES [Estados]([ID])
)

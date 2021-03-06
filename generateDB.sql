USE [master]
GO
/****** Object:  Database [Universidad]    Script Date: 1/12/2019 20:58:37 ******/
CREATE DATABASE [Universidad]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Universidad', FILENAME = N'C:\Users\frank\Universidad.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Universidad_log', FILENAME = N'C:\Users\frank\Universidad_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Universidad] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Universidad].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Universidad] SET ANSI_NULL_DEFAULT ON 
GO
ALTER DATABASE [Universidad] SET ANSI_NULLS ON 
GO
ALTER DATABASE [Universidad] SET ANSI_PADDING ON 
GO
ALTER DATABASE [Universidad] SET ANSI_WARNINGS ON 
GO
ALTER DATABASE [Universidad] SET ARITHABORT ON 
GO
ALTER DATABASE [Universidad] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Universidad] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Universidad] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Universidad] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Universidad] SET CURSOR_DEFAULT  LOCAL 
GO
ALTER DATABASE [Universidad] SET CONCAT_NULL_YIELDS_NULL ON 
GO
ALTER DATABASE [Universidad] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Universidad] SET QUOTED_IDENTIFIER ON 
GO
ALTER DATABASE [Universidad] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Universidad] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Universidad] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Universidad] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Universidad] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Universidad] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Universidad] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Universidad] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Universidad] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Universidad] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Universidad] SET  MULTI_USER 
GO
ALTER DATABASE [Universidad] SET PAGE_VERIFY NONE  
GO
ALTER DATABASE [Universidad] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Universidad] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Universidad] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [Universidad] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Universidad] SET QUERY_STORE = OFF
GO
USE [Universidad]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [Universidad]
GO
/****** Object:  Table [dbo].[Alumnos]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alumnos](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Legajo] [int] NOT NULL,
	[Edad] [int] NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
 CONSTRAINT [PK_Alumnos] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cursos]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cursos](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Asignatura] [varchar](50) NOT NULL,
	[Capacidad_Max] [int] NOT NULL,
	[Docente] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Cursos] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Estados]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estados](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Estados] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Inscripciones]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Inscripciones](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[AlumnoID] [int] NOT NULL,
	[CursoID] [int] NOT NULL,
	[FechaInscripcion] [date] NOT NULL,
	[EstadoID] [int] NOT NULL,
 CONSTRAINT [PK_Inscripciones] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Alumnos] ON 

INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (1, N'Franco Esparza', 45223, 26, CAST(N'1993-01-06' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (2, N'Mariana Serena', 33145, 25, CAST(N'1994-09-06' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (3, N'Ricardo Bernes', 11089, 20, CAST(N'1999-06-29' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (4, N'Juliana Seara', 44356, 26, CAST(N'1993-08-08' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (5, N'Santiago Vivas', 7998, 20, CAST(N'1999-01-09' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (6, N'Alberto Asensi', 33998, 19, CAST(N'2000-05-09' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (7, N'Jenny Santolaya', 55023, 24, CAST(N'1995-01-09' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (8, N'Camila Gonzalez', 26992, 26, CAST(N'1993-12-01' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (9, N'Elisa Ruperez', 98721, 19, CAST(N'2000-03-09' AS Date))
INSERT [dbo].[Alumnos] ([ID], [Nombre], [Legajo], [Edad], [FechaNacimiento]) VALUES (10, N'Salvio Alloza', 23144, 25, CAST(N'1994-03-06' AS Date))
SET IDENTITY_INSERT [dbo].[Alumnos] OFF
SET IDENTITY_INSERT [dbo].[Cursos] ON 

INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (1, N'Mongo DB Fundamentos', 20, N'Bruno James')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (2, N'Mongo DB Avanzado', 15, N'Bruno James')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (3, N'React Js (Básico)', 25, N'Franco Esparza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (4, N'React Js (Avanzado)', 15, N'Franco Esparza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (5, N'Node JS (Básico)', 30, N'Cristian Donato')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (6, N'.Net Core', 15, N'Laura Esperanza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (7, N'Scrum', 20, N'Franco Esparza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (8, N'
Introducción a la Programación (POO)', 30, N'Ricardo Gimenez')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (9, N'Vue Js', 10, N'Sol Benitez')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (10, N'
Python para Analisis de Datos', 10, N'Lautaro Martinez')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (11, N'Flutter', 15, N'Jack Stones')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (12, N'
Introducción a la impresión 3D', 30, N'Richard Bone')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (13, N'Bitcoins y Criptomonedas', 10, N'Carla Dionisio')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (14, N'
Blockchain (Avanzado)', 10, N'Carla Dionisio')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (15, N'Gestión de Proyectos', 10, N'Franco Esparza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (16, N'Software Tester QA', 30, N'Lorena Silva')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (17, N'Software Tester QA (Avanzado)', 10, N'Lorena Silva')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (18, N'Machine Learning (Básico)', 20, N'Mariana Bonadea')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (19, N'Big Data', 15, N'Milton Casco')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (20, N'Liderazgo y Gestión de Equipos', 10, N'Bruno James')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (21, N'Liderazgo para Equipos Agiles', 15, N'Bruno James')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (22, N'Introducción a Bases de Datos y SQL', 20, N'Ariel Mechea')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (23, N'Arquitectura avanzada en Node js', 10, N'Franco Esparza')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (24, N'Angular 8', 25, N'Mauricio Berdino')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (25, N'Javascript (Básico)', 20, N'Cristian Rufino')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (26, N'Javascript (Avanzado)', 15, N'Cristian Rufino')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (27, N'Html y Css (Básico)', 30, N'Ricardo Benitez')
INSERT [dbo].[Cursos] ([ID], [Asignatura], [Capacidad_Max], [Docente]) VALUES (28, N'Html y Css (Avanzado)', 15, N'Ricardo Benitez')
SET IDENTITY_INSERT [dbo].[Cursos] OFF
SET IDENTITY_INSERT [dbo].[Estados] ON 

INSERT [dbo].[Estados] ([ID], [Descripcion]) VALUES (1, N'Inscripto')
INSERT [dbo].[Estados] ([ID], [Descripcion]) VALUES (2, N'Regular')
INSERT [dbo].[Estados] ([ID], [Descripcion]) VALUES (3, N'No Regular')
INSERT [dbo].[Estados] ([ID], [Descripcion]) VALUES (4, N'Aprobada')
SET IDENTITY_INSERT [dbo].[Estados] OFF
SET IDENTITY_INSERT [dbo].[Inscripciones] ON 

INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (1, 1, 11, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (2, 1, 14, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (3, 1, 19, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (4, 2, 1, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (5, 2, 3, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (6, 2, 18, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (7, 2, 25, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (8, 2, 27, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (9, 3, 7, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (10, 3, 9, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (11, 3, 12, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (12, 3, 15, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (13, 4, 4, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (14, 4, 10, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (15, 4, 11, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (16, 4, 17, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (17, 4, 26, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (18, 5, 6, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (19, 5, 9, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (20, 5, 12, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (21, 5, 13, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (22, 6, 1, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (23, 6, 3, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (24, 6, 18, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (25, 6, 25, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (26, 6, 27, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (27, 7, 2, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (28, 7, 6, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (29, 7, 7, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (30, 7, 12, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (31, 7, 19, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (32, 8, 6, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (33, 8, 10, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (34, 8, 16, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (35, 8, 23, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (36, 9, 11, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (37, 9, 19, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (38, 9, 24, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (39, 10, 26, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (40, 10, 21, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (41, 10, 6, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (42, 10, 2, CAST(N'2019-12-01' AS Date), 1)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (43, 1, 19, CAST(N'2018-03-05' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (45, 2, 1, CAST(N'2018-03-09' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (46, 3, 12, CAST(N'2018-03-01' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (47, 4, 11, CAST(N'2018-03-09' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (48, 5, 9, CAST(N'2018-03-20' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (49, 7, 2, CAST(N'2018-03-11' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (50, 9, 24, CAST(N'2018-03-01' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (51, 10, 6, CAST(N'2018-02-02' AS Date), 3)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (52, 1, 20, CAST(N'2018-02-02' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (53, 2, 10, CAST(N'2018-02-06' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (54, 6, 20, CAST(N'2018-02-01' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (55, 7, 9, CAST(N'2018-02-08' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (56, 8, 20, CAST(N'2018-03-01' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (57, 9, 7, CAST(N'2018-03-07' AS Date), 4)
INSERT [dbo].[Inscripciones] ([ID], [AlumnoID], [CursoID], [FechaInscripcion], [EstadoID]) VALUES (58, 10, 9, CAST(N'2019-02-02' AS Date), 4)
SET IDENTITY_INSERT [dbo].[Inscripciones] OFF
ALTER TABLE [dbo].[Inscripciones] ADD  DEFAULT ((1)) FOR [EstadoID]
GO
ALTER TABLE [dbo].[Inscripciones]  WITH CHECK ADD  CONSTRAINT [FK_Inscripciones_Alumnos] FOREIGN KEY([AlumnoID])
REFERENCES [dbo].[Alumnos] ([ID])
GO
ALTER TABLE [dbo].[Inscripciones] CHECK CONSTRAINT [FK_Inscripciones_Alumnos]
GO
ALTER TABLE [dbo].[Inscripciones]  WITH CHECK ADD  CONSTRAINT [FK_Inscripciones_Cursos] FOREIGN KEY([CursoID])
REFERENCES [dbo].[Cursos] ([ID])
GO
ALTER TABLE [dbo].[Inscripciones] CHECK CONSTRAINT [FK_Inscripciones_Cursos]
GO
ALTER TABLE [dbo].[Inscripciones]  WITH CHECK ADD  CONSTRAINT [FK_Inscripciones_Estados] FOREIGN KEY([EstadoID])
REFERENCES [dbo].[Estados] ([ID])
GO
ALTER TABLE [dbo].[Inscripciones] CHECK CONSTRAINT [FK_Inscripciones_Estados]
GO
/****** Object:  StoredProcedure [dbo].[obtenerCursosInscriptos]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[obtenerCursosInscriptos]
	@idAlumno int
AS
BEGIN

	SELECT * FROM dbo.Cursos c
		WHERE c.ID IN (
			SELECT i.CursoID FROM dbo.Inscripciones i
			WHERE i.AlumnoID = @idAlumno AND i.EstadoID IN(1,2,4)
		)

END
GO
/****** Object:  StoredProcedure [dbo].[obtenerCursosNoInscriptos]    Script Date: 1/12/2019 20:58:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[obtenerCursosNoInscriptos]
	@idAlumno int
AS
BEGIN

	SELECT * FROM dbo.Cursos c
		WHERE c.ID NOT IN (
			SELECT i.CursoID FROM dbo.Inscripciones i
			WHERE i.AlumnoID = @idAlumno AND i.EstadoID IN(1,2,4)
		)

END
GO
USE [master]
GO
ALTER DATABASE [Universidad] SET  READ_WRITE 
GO

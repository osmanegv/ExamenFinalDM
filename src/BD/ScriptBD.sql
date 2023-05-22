-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: BDFinal
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Asignacion`
--

DROP TABLE IF EXISTS `Asignacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Asignacion` (
  `CarnetEstudiante` int NOT NULL,
  `CodigoCurso` int NOT NULL,
  `Seccion` varchar(10) DEFAULT NULL,
  `FechaAsignacion` varchar(12) DEFAULT NULL,
  `Semestre` int DEFAULT NULL,
  `Año` int DEFAULT NULL,
  PRIMARY KEY (`CarnetEstudiante`,`CodigoCurso`),
  KEY `fk_Asignacion_Estudiante_idx` (`CarnetEstudiante`),
  KEY `fk_Asignacion_Curso1_idx` (`CodigoCurso`),
  CONSTRAINT `fk_Asignacion_Curso1` FOREIGN KEY (`CodigoCurso`) REFERENCES `Curso` (`CodigoCurso`),
  CONSTRAINT `fk_Asignacion_Estudiante` FOREIGN KEY (`CarnetEstudiante`) REFERENCES `Estudiante` (`CarnetEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Asignacion`
--

LOCK TABLES `Asignacion` WRITE;
/*!40000 ALTER TABLE `Asignacion` DISABLE KEYS */;
INSERT INTO `Asignacion` VALUES (201900430,1,'A','10/01/2020',1,2020),(201902450,1,'A','11/01/2020',1,2020),(201956570,3,'A','15/01/2021',2,2021);
/*!40000 ALTER TABLE `Asignacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Curso`
--

DROP TABLE IF EXISTS `Curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Curso` (
  `CodigoCurso` int NOT NULL,
  `NombreCurso` varchar(45) DEFAULT NULL,
  `Semestre` int DEFAULT NULL,
  `CreditosOtorga` int DEFAULT NULL,
  PRIMARY KEY (`CodigoCurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Curso`
--

LOCK TABLES `Curso` WRITE;
/*!40000 ALTER TABLE `Curso` DISABLE KEYS */;
INSERT INTO `Curso` VALUES (1,'Bases de datos 1',1,8),(2,'Programacion Web',2,7),(3,'Programacion IA',2,9);
/*!40000 ALTER TABLE `Curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Estudiante`
--

DROP TABLE IF EXISTS `Estudiante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Estudiante` (
  `CarnetEstudiante` int NOT NULL,
  `Nombre` varchar(45) DEFAULT NULL,
  `Carrera` varchar(15) DEFAULT NULL,
  `Correo` varchar(20) DEFAULT NULL,
  `Telefono` varchar(12) DEFAULT NULL,
  `Genero` varchar(10) DEFAULT NULL,
  `FechaIngreso` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CarnetEstudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Estudiante`
--

LOCK TABLES `Estudiante` WRITE;
/*!40000 ALTER TABLE `Estudiante` DISABLE KEYS */;
INSERT INTO `Estudiante` VALUES (201900430,'Osman Galindo','Sistemas','osman@gmail.com','57462721','Hombre','15/01/2019'),(201900431,'Maria Garcia','Civil','maria@gmail.com','45646578','mujer','11/01/2019'),(201902450,'Jesse Alas','Sistemas','jesse@gmail.com','56321798','Hombre','10/01/2019'),(201956570,'Adler Ramos','Sistemas','adler@gmail.com','23652478','Hombre','11/01/2019');
/*!40000 ALTER TABLE `Estudiante` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-21 21:45:33

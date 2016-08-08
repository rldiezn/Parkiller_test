/*
SQLyog Ultimate v9.63 
MySQL - 5.6.17 : Database - parkiller
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`parkiller` /*!40100 DEFAULT CHARACTER SET utf8 */;

/*Table structure for table `cliente` */

CREATE TABLE `cliente` (
  `id_cliente` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nom_cliente` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ape_cliente` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `vehiculo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `color` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `matricula` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `rfc_cliente` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correo_cliente` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telef_cliente` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `cliente_matricula_unique` (`matricula`),
  UNIQUE KEY `cliente_rfc_cliente_unique` (`rfc_cliente`),
  UNIQUE KEY `cliente_correo_cliente_unique` (`correo_cliente`),
  UNIQUE KEY `cliente_telef_cliente_unique` (`telef_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `cliente` */

insert  into `cliente`(`id_cliente`,`nom_cliente`,`ape_cliente`,`vehiculo`,`color`,`matricula`,`rfc_cliente`,`correo_cliente`,`telef_cliente`,`remember_token`,`created_at`,`updated_at`) values (1,'Ricardo Luis','Diez Noria','BMW','Rojo','axv888','DINR880914AC5','rldiezn@gmail.com','5539712251',NULL,NULL,NULL);

/*Table structure for table `migrations` */

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`migration`,`batch`) values ('2014_10_12_000000_create_users_table',1),('2014_10_12_100000_create_password_resets_table',1),('2016_08_06_000000_create_conductor',3),('2016_08_06_000000_create_parkero',4),('2016_08_06_000000_create_cliente',5);

/*Table structure for table `parkero` */

CREATE TABLE `parkero` (
  `id_parkero` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nom_parkero` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ape_parkero` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correo_parkero` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `telef_parkero` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_parkero`),
  UNIQUE KEY `parkero_correo_parkero_unique` (`correo_parkero`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `parkero` */

insert  into `parkero`(`id_parkero`,`nom_parkero`,`ape_parkero`,`correo_parkero`,`telef_parkero`,`remember_token`,`created_at`,`updated_at`) values (1,'Parkero 1','Apellido Parkero 1','parkero1@gmail.com','55555555',NULL,NULL,NULL),(2,'Parkero 2','Apellido Parkero 2','parkero2@gmial.com','66666666',NULL,NULL,NULL),(3,'Parkero 3 ','ApellidonParkero 3','parkero3@gmail.com','77777777',NULL,NULL,NULL);

/*Table structure for table `password_resets` */

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `password_resets` */

/*Table structure for table `users` */

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

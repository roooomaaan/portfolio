-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 19 déc. 2024 à 13:05
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestioncommandes`
--

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id_client` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `date_inscription` date DEFAULT NULL,
  PRIMARY KEY (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id_client`, `nom`, `prenom`, `email`, `date_inscription`) VALUES
(1, 'Dupont', 'Marie', 'marie.dupont@example.com', '2023-01-10'),
(2, 'Durand', 'Paul', 'paul.durand@example.com', '2023-02-20'),
(3, 'Martin', 'Alice', 'alice.martin@example.com', '2023-03-15');

-- --------------------------------------------------------

--
-- Structure de la table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
CREATE TABLE IF NOT EXISTS `commandes` (
  `id_commande` int NOT NULL AUTO_INCREMENT,
  `id_client` int DEFAULT NULL,
  `date_commande` date DEFAULT NULL,
  `montant_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_commande`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `commandes`
--

INSERT INTO `commandes` (`id_commande`, `id_client`, `date_commande`, `montant_total`) VALUES
(1, 1, '2023-12-01', 1950.00),
(2, 2, '2023-12-03', 800.00);

-- --------------------------------------------------------

--
-- Structure de la table `detailscommandes`
--

DROP TABLE IF EXISTS `detailscommandes`;
CREATE TABLE IF NOT EXISTS `detailscommandes` (
  `id_detail` int NOT NULL AUTO_INCREMENT,
  `id_commande` int DEFAULT NULL,
  `id_produit` int DEFAULT NULL,
  `quantite` int DEFAULT NULL,
  `prix_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_detail`),
  KEY `id_commande` (`id_commande`),
  KEY `id_produit` (`id_produit`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `detailscommandes`
--

INSERT INTO `detailscommandes` (`id_detail`, `id_commande`, `id_produit`, `quantite`, `prix_total`) VALUES
(1, 1, 1, 1, 1200.00),
(2, 1, 3, 5, 750.00),
(3, 2, 2, 1, 800.00);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `id_produit` int NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(255) DEFAULT NULL,
  `prix` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `produits`
--

INSERT INTO `produits` (`id_produit`, `nom_produit`, `prix`, `stock`) VALUES
(1, 'Ordinateur portable', 1200.00, 10),
(2, 'Smartphone', 800.00, 15),
(3, 'Casque audio', 150.00, 30),
(4, 'Clavier', 50.00, 50);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`);

--
-- Contraintes pour la table `detailscommandes`
--
ALTER TABLE `detailscommandes`
  ADD CONSTRAINT `detailscommandes_ibfk_1` FOREIGN KEY (`id_commande`) REFERENCES `commandes` (`id_commande`),
  ADD CONSTRAINT `detailscommandes_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id_produit`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2023 a las 04:35:45
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuarios_pokemon`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_usuarios`
--

CREATE TABLE `lista_usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellido_paterno` varchar(100) NOT NULL,
  `apellido_materno` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lista_usuarios`
--

INSERT INTO `lista_usuarios` (`id`, `nombres`, `apellido_paterno`, `apellido_materno`, `correo`, `usuario`, `clave`) VALUES
(1, 'marcos', 'sifuentes', 'chacta', 'marco@gmail.com', 'marco555', 'marcus555'),
(2, 'ash', 'ketchum', 'golon', 'ash@utp.edu.pe', 'ketchum', 'ketchu,123'),
(6, 'w333', 'www', 'www', 'ww@', 'as', 'as'),
(7, 'jose', 'palacios', 'arguedas', 'ar@gmail.com', 'chacalon', 'chacalon777'),
(8, 'dd', 'dd', 'dd', 'dd@', 'dd', 'ddd'),
(9, 'wal', 'wal', 'wal', 'wal', 'walter', 'walter'),
(10, 'pepe', 'pepe', 'pepe', 'pepe@', 'pepe', 'elpepe'),
(11, 'qqqq', 'qqqq', 'qqqq', 'qqqq@', 'qqqq', 'qqqqq'),
(12, 'dddd', 'dddd', 'ddddd', 'dddd@', 'dddd', 'dddd');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `lista_usuarios`
--
ALTER TABLE `lista_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lista_usuarios`
--
ALTER TABLE `lista_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

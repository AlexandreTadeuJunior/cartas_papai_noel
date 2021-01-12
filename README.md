# cartas_papai_noel
Desenvolvimento de uma API para ler e escrever cartas ao papai Noel

# DB utilizado
CREATE TABLE `letter` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tittle` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `children_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1

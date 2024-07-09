-- Base de donnée Google BigQuery

CREATE TABLE Olympic.Lieux (
    id INT64,
    nom STRING NOT NULL,
    adresse STRING NOT NULL,
    code_postal STRING NOT NULL
);

CREATE TABLE Olympic.Activites (
    id INT64,
    nom STRING NOT NULL,
    description STRING,
    date DATE NOT NULL,
    heure TIME NOT NULL,
    lieu INT64
);

CREATE TABLE Olympic.Spots (
    id INT64,
    nom STRING NOT NULL,
    description STRING,
    lieu INT64
);

CREATE TABLE Olympic.Sports (
    id INT64,
    nom STRING,
    description STRING
);

INSERT INTO Olympic.Lieux (id, nom, adresse, code_postal) VALUES
(1, 'Stade de France', 'Saint-Denis', '93216'),
(2, 'Parc des Princes', '24 Rue du Commandant Guilbaud, Paris', '75016'),
(3, 'Palais Omnisports de Paris-Bercy', '8 Boulevard de Bercy, Paris', '75012'),
(4, 'Stade Roland Garros', '2 Avenue Gordon Bennett, Paris', '75016'),
(5, 'Champ de Mars', '5 Avenue Anatole France, Paris', '75007');

INSERT INTO Olympic.Activites (id, nom, description, date, heure, lieu) VALUES
(1, 'Cérémonie d\'ouverture', 'Cérémonie officielle d\'ouverture des JO de Paris 2024', '2024-07-26', '20:00:00', 1),
(2, 'Finale 100m masculin', 'Course finale du 100m hommes', '2024-08-03', '21:00:00', 1),
(3, 'Finale 100m féminin', 'Course finale du 100m femmes', '2024-08-04', '21:00:00', 1),
(4, 'Finale de football masculin', 'Match final de football masculin', '2024-08-10', '20:00:00', 2),
(5, 'Finale de football féminin', 'Match final de football féminin', '2024-08-09', '20:00:00', 2),
(6, 'Finale de judo', 'Compétition finale de judo', '2024-07-30', '15:00:00', 3),
(7, 'Finale de tennis', 'Match final de tennis', '2024-08-04', '14:00:00', 4),
(8, 'Compétition de beach-volley', 'Match de beach-volley', '2024-08-01', '10:00:00', 5),
(9, 'Compétition de tir à l\'arc', 'Compétition de tir à l\'arc', '2024-07-28', '09:00:00', 5),
(10, 'Compétition d\'escalade', 'Compétition d\'escalade sportive', '2024-07-29', '11:00:00', 5);

INSERT INTO Olympic.Spots (id, nom, description, lieu) VALUES
(1, 'Zone d\'entraînement 1', 'Zone d\'entraînement pour les athlètes de course', 1),
(2, 'Zone d\'entraînement 2', 'Zone d\'entraînement pour les athlètes de football', 2),
(3, 'Zone de repos 1', 'Zone de repos pour les athlètes de judo', 3),
(4, 'Zone de repos 2', 'Zone de repos pour les athlètes de tennis', 4),
(5, 'Zone de compétition 1', 'Zone de compétition pour le beach-volley', 5);

INSERT INTO Olympic.Sports (id, nom, description)
VALUES
    (1, 'Athlétisme', 'L''athlétisme aux Jeux Olympiques de Paris 2024 comprendra une série d''épreuves de course, de saut et de lancer. Des athlètes du monde entier rivaliseront pour la médaille d''or dans des disciplines comme le sprint, le saut en hauteur, le lancer de javelot et bien plus encore.'),
    (2, 'Natation', 'La natation sera l''un des sports phares des Jeux Olympiques de Paris 2024. Les compétitions se dérouleront dans des piscines spectaculaires, avec des épreuves de nage libre, de dos, de brasse et de papillon, ainsi que des relais passionnants.'),
    (3, 'Cyclisme', 'Le cyclisme aux Jeux Olympiques de Paris 2024 inclura des épreuves sur route, sur piste et en VTT. Les cyclistes s''affronteront sur des parcours variés à travers la région parisienne, offrant des défis techniques et des courses palpitantes.'),
    (4, 'Gymnastique', 'La gymnastique artistique et rythmique sera au rendez-vous des Jeux Olympiques de Paris 2024. Les gymnastes montreront leur agilité, leur force et leur grâce dans des disciplines comme le sol, les barres asymétriques, le saut et bien plus encore.'),
    (5, 'Tennis', 'Le tennis aux Jeux Olympiques de Paris 2024 se tiendra dans des installations emblématiques de la capitale française. Les meilleurs joueurs et joueuses du monde s''affronteront pour décrocher l''or olympique dans des matchs passionnants de simple, double et mixte.'),
    (6, 'Boxe', 'La boxe olympique à Paris 2024 verra les meilleurs pugilistes du monde s''affronter pour la gloire olympique. Les combats seront intenses et pleins de stratégie, avec des compétiteurs représentant une diversité de styles et de pays.'),
    (7, 'Basketball', 'Le basketball aux Jeux Olympiques de Paris 2024 attirera des équipes masculines et féminines de premier plan. Les matchs se dérouleront dans des arènes modernes, offrant aux fans des compétitions rapides, dynamiques et pleines de suspense.'),
    (8, 'Escalade', 'L''escalade sportive fera ses débuts aux Jeux Olympiques de Paris 2024. Les grimpeurs affronteront des murs verticaux et difficiles dans des épreuves de vitesse, de bloc et de difficulté, mettant à l''épreuve leur force, agilité et stratégie.'),
    (9, 'Judo', 'Le judo aux Jeux Olympiques de Paris 2024 promet des compétitions intenses et techniques. Les judokas utiliseront leur habileté et leur intelligence tactique pour projeter leurs adversaires au tapis et viser la médaille d''or olympique.'),
    (10, 'Voile', 'La voile aux Jeux Olympiques de Paris 2024 se déroulera sur les eaux de la Manche et de l''Atlantique. Les marins affronteront des conditions variées dans des épreuves de dériveur, de planche à voile et de voile légère, visant à dominer les flots et le vent.');


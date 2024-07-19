CREATE TABLE GLOBAL (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE SPORT (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE ROMANCE (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE SLICE_OF_LIFE (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE FANTASY (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE ISEKAI (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE SCI_FI (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE COMEDY (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE DRAMA (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10),
    Saison VARCHAR(50)
);

CREATE TABLE MOVIE (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nom VARCHAR(255),
    Nom_alternatif VARCHAR(255),
    Nombre_episodes INT,
    Genres VARCHAR(255),
    Synopsis TEXT,
    Picture TEXT,
    Background TEXT,
    Rang VARCHAR(10)
);

CREATE TABLE AllCategorie (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Genre VARCHAR(50) NOT NULL,
    Synopsis TEXT
);





-- Insertion des données dans la table GLOBAL
INSERT INTO GLOBAL (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Hunter x Hunter', 'HxH', 148, 'Action, Adventure', 'Gon Freecss découvre que son père, qu\'il croyait mort, est en fait un célèbre Hunter. Il décide alors de devenir un Hunter pour le retrouver, entamant ainsi une aventure épique.', '/public/assets/images/categoriePic/Gon.png', '/public/assets/images/Background/GreedIsland-background.png', '1er', 6),
('Code Geass', 'CG', 50, 'Action, Mecha', 'Dans un Japon dystopique contrôlé par l\'empire de Britannia, Lelouch vi Britannia acquiert le pouvoir du Geass et se rebelle contre l\'empire en tant que mystérieux leader masqué, Zero.', '/public/assets/images/categoriePic/lelouch.png', '/public/assets/images/Background/code-back.png', '2ème', 2),
('Parasyte', 'Kiseijuu', 24, 'Horror, Sci-Fi', 'Des parasites extraterrestres envahissent la Terre et prennent le contrôle des corps humains. Un lycéen, Shinichi Izumi, se retrouve avec un parasite dans sa main droite, et ils doivent coexister pour survivre.', '/public/assets/images/categoriePic/shinichi.png', '/public/assets/images/Background/parasyte-back.png', '3ème', 1);

-- Insertion des données dans la table SPORT
INSERT INTO SPORT (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Haikyuu', 'HQ', 85, 'Sports, Drama', 'Shouyou Hinata, inspiré par un as du volleyball surnommé "Le Petit Géant", forme une équipe de volleyball au collège. Après une défaite écrasante contre Tobio Kageyama, il rejoint son équipe de lycée pour se venger.', '/public/assets/images/categoriePic/Hinata.png', '/public/assets/images/Background/haikyu-back.png', '1er', 5),
('Run with the Wind', 'Kaze ga Tsuyoku Fuiteiru', 23, 'Sports, Drama', 'Kakeru, ancien coureur de fond, est invité par Haiji à vivre dans un dortoir avec huit autres résidents et à courir le marathon universitaire de Hakone Ekiden avec eux.', '/public/assets/images/categoriePic/runwiththewind.png', '/public/assets/images/Background/run-back.png', '2ème', 1),
('Kuroko no Basket', 'Kuroko\'s Basketball', 75, 'Sports, School', 'Kuroko Tetsuya, ancien membre fantôme de la Génération des Miracles, rejoint l\'équipe de basket de Seirin avec le talentueux Kagami Taiga, et ensemble ils visent le championnat.', '/public/assets/images/categoriePic/kuroko.png', '/public/assets/images/Background/kuroko-back.jpg', '3ème', 3);

-- Insertion des données dans la table ROMANCE
INSERT INTO ROMANCE (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Your lie in April', 'Shigatsu wa Kimi no Uso', 22, 'Romance, Music', 'Kousei Arima, ancien prodige du piano, perd la capacité de jouer après la mort de sa mère. Sa vie change lorsqu\'il rencontre une violoniste excentrique et énergique, Kaori Miyazono.', '/public/assets/images/categoriePic/Kaori.png', '/public/assets/images/Background/your-back.png', '1er', 1),
('Kaguya-sama: Love Is War', 'Kaguya-sama wa kokurasetai: Tensai-tachi no renai zunōsen', 24, 'Romance, Comedy', 'Kaguya Shinomiya et Miyuki Shirogane, membres du conseil étudiant, s\'aiment secrètement. Leur fierté les empêche de confesser leurs sentiments, et ils élaborent des stratagèmes pour forcer l\'autre à avouer en premier.', '/public/assets/images/categoriePic/kaguya.png', '/public/assets/images/Background/kaguya-back.jpg', '2ème', 3),
('Nagi no Asukara', 'A Lull in the Sea', 26, 'Romance, Fantasy', 'Quatre amis d\'enfance des profondeurs de la mer doivent fréquenter une école de surface après la fermeture de leur école sous-marine. Leur adaptation entraîne des bouleversements émotionnels et des découvertes personnelles.', '/public/assets/images/categoriePic/nagi.png', '/public/assets/images/Background/nagi-back.png', '3ème', 2);

-- Insertion des données dans la table SLICE_OF_LIFE
INSERT INTO SLICE_OF_LIFE (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Horimiya', 'Hori-san to Miyamura-kun', 13, 'Slice of Life, Romance', 'Kyouko Hori, une étudiante populaire, et Izumi Miyamura, un garçon discret avec un côté rebelle caché, découvrent leurs vrais selves et développent une relation profonde et inattendue.', '/public/assets/images/categoriePic/Horimiya.png', '/public/assets/images/Background/hori-back.jpg', '1er', 1),
('My Teen Romantic Comedy SNAFU TOO!', 'Oregairu', 13, 'Slice of Life, Comedy', 'Hachiman Hikigaya, un lycéen cynique, et Yukino Yukinoshita, une élève modèle, sont forcés de travailler ensemble dans le club de bénévolat, affrontant divers problèmes sociaux et émotionnels.', '/public/assets/images/categoriePic/oreigaru.png', '/public/assets/images/Background/oreigaru-back.jpg', '2ème', 2),
('ReLIFE', 'ReLIFE', 13, 'Slice of Life, Romance', 'Arata Kaizaki, un homme de 27 ans sans emploi, a l\'opportunité de rajeunir de 10 ans et de revivre sa vie de lycéen grâce à un programme expérimental nommé ReLIFE.', '/public/assets/images/categoriePic/relife.png', '/public/assets/images/Background/relife-back.png', '3ème', 1);

-- Insertion des données dans la table FANTASY
INSERT INTO FANTASY (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Frieren', 'Sousou no Frieren', 12, 'Fantasy, Adventure', 'Frieren, une elfe mage, continue sa vie après la mort de ses compagnons de voyage. Elle entreprend une nouvelle aventure pour comprendre les sentiments humains et la valeur du temps.', '/public/assets/images/categoriePic/Frieren.png', '/public/assets/images/Background/frieren_back.jpg', '1er', 1),
('Danmachi', 'Is It Wrong to Try to Pick Up Girls in a Dungeon?', 37, 'Fantasy, Adventure', 'Bell Cranel, un aventurier novice, cherche à devenir plus fort et à protéger sa déesse, Hestia, dans un monde rempli de dieux et de monstres.', '/public/assets/images/categoriePic/danmachi.png', '/public/assets/images/Background/danmachi-back.jpg', '2ème', 4),
('Akame ga Kill!', 'Akame ga Kiru!', 24, 'Fantasy, Action', 'Tatsumi rejoint Night Raid, un groupe d\'assassins rebelles, pour combattre la corruption de l\'empire et changer le destin de son pays.', '/public/assets/images/categoriePic/Akame.png', '/public/assets/images/Background/akame-back.jpg', '3ème', 1);

-- Insertion des données dans la table ISEKAI
INSERT INTO ISEKAI (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Re:Zero', 'Re:Zero kara Hajimeru Isekai Seikatsu', 50, 'Isekai, Drama', 'Subaru Natsuki est transporté dans un monde fantastique où il découvre qu\'il a le pouvoir de revenir à la vie après la mort, et utilise cette capacité pour protéger ses amis.', '/public/assets/images/categoriePic/Subaru.png', '/public/assets/images/Background/rezero-back.png', '1er', 3),
('Sword Art Online', 'SAO', 96, 'Isekai, Adventure', 'Des milliers de joueurs sont piégés dans le jeu de réalité virtuelle Sword Art Online. Kirito, un joueur solo, doit survivre et libérer tout le monde en atteignant le dernier niveau.', '/public/assets/images/categoriePic/kirito.png', '/public/assets/images/Background/sword-back.png', '2ème', 4),
('Mushoku Tensei', 'Mushoku Tensei: Isekai Ittara Honki Dasu', 12, 'Isekai, Fantasy', 'Un homme réincarné dans un monde de magie et d\'aventures décide de vivre sa nouvelle vie au maximum, en utilisant les souvenirs et les connaissances de sa vie précédente.', '/public/assets/images/categoriePic/rudeus.png', '/public/assets/images/Background/mushoku-back.jpg', '3ème', 1);

-- Insertion des données dans la table SCI_FI
INSERT INTO SCI_FI (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Code Geass', 'CG', 50, 'Sci-Fi, Mecha', 'Dans un Japon dystopique contrôlé par l\'empire de Britannia, Lelouch vi Britannia acquiert le pouvoir du Geass et se rebelle contre l\'empire en tant que mystérieux leader masqué, Zero.', '/public/assets/images/categoriePic/lelouch.png', '/public/assets/images/Background/code-back.png', '1er', 2),
('Parasyte', 'Kiseijuu', 24, 'Sci-Fi, Horror', 'Des parasites extraterrestres envahissent la Terre et prennent le contrôle des corps humains. Un lycéen, Shinichi Izumi, se retrouve avec un parasite dans sa main droite, et ils doivent coexister pour survivre.', '/public/assets/images/categoriePic/shinichi.png', '/public/assets/images/Background/parasyte-back.png', '2ème', 1),
('Suisei no Gargantia', 'Gargantia on the Verdurous Planet', 13, 'Sci-Fi, Adventure', 'Après une bataille interstellaire, le jeune soldat Ledo se réveille sur une Terre inondée et paisible, découvrant une culture totalement différente de la sienne.', '/public/assets/images/categoriePic/gargentia.png', '/public/assets/images/Background/suiser-back.png', '3ème', 1);

-- Insertion des données dans la table COMEDY
INSERT INTO COMEDY (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Konosuba', 'Kono Subarashii Sekai ni Shukufuku wo!', 20, 'Comedy, Fantasy', 'Kazuma Satou, un adolescent réincarné dans un monde fantastique, forme un groupe d\'aventuriers excentriques et hilarants pour survivre et s\'amuser.', '/public/assets/images/categoriePic/Kazuma.png', '/public/assets/images/Background/konosuba-back.png', '1er', 3),
('Grand Blue', 'Grand Blue Dreaming', 12, 'Comedy, Slice of Life', 'Iori Kitahara commence sa vie universitaire au bord de la mer et se joint à un club de plongée excentrique où règnent fêtes et amitiés.', '/public/assets/images/categoriePic/grandblue.png', '/public/assets/images/Background/grand-back.jpg', '2ème', 1),
('Angel Beats', 'Angel Beats!', 13, 'Comedy, Drama', 'Dans une vie après la mort de lycée, des âmes tourmentées se rebellent contre Dieu, dirigées par une mystérieuse leader et combattant une étrange ennemie nommée Angel.', '/public/assets/images/categoriePic/angel.png', '/public/assets/images/Background/angel-back.jpg', '3ème', 1);

-- Insertion des données dans la table DRAMA
INSERT INTO DRAMA (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang, Saison) VALUES
('Clannad', 'Clannad', 23, 'Drama, Romance', 'Tomoya Okazaki, un délinquant apathique, rencontre Nagisa Furukawa, une fille fragile avec un rêve de relancer le club de théâtre, et ensemble ils traversent les épreuves de la vie.', '/public/assets/images/categoriePic/nagisa.png', '/public/assets/images/Background/clannad-back.png', '1er', 2),
('Angel Beats', 'Angel Beats!', 13, 'Drama, Comedy', 'Dans une vie après la mort de lycée, des âmes tourmentées se rebellent contre Dieu, dirigées par une mystérieuse leader et combattant une étrange ennemie nommée Angel.', '/public/assets/images/categoriePic/angel.png', '/public/assets/images/Background/angel-back.jpg', '2ème', 1),
('ANOHANA', 'Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai', 11, 'Drama, Slice of Life', 'Un groupe d\'amis d\'enfance se réunit lorsqu\'un des membres, décédé, revient comme un fantôme pour leur demander de réaliser son souhait.', '/public/assets/images/categoriePic/anohana.png', '/public/assets/images/Background/anohana-back.jpg', '3ème', 1);

-- Insertion des données dans la table MOVIE
INSERT INTO MOVIE (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background, Rang) VALUES
('A Silent Voice', 'Koe no Katachi', 1, 'Drama, Romance', 'Shouya Ishida, un ancien harceleur, cherche la rédemption en se liant d\'amitié avec Shouko Nishimiya, une fille sourde qu\'il a tourmentée dans le passé.', '/public/assets/images/categoriePic/Ishida.png', '/public/assets/images/Background/koe-back.jpg', '1er'),
('Josée, le Tigre et les Poissons', 'Josee to Tora to Sakana-tachi', 1, 'Drama, Romance', 'Tsuneo Suzukawa, étudiant universitaire, rencontre Josée, une jeune femme en fauteuil roulant, et leurs vies changent alors qu\'ils apprennent à se comprendre et à s\'entraider.', '/public/assets/images/categoriePic/josee.png', '/public/assets/images/Background/jose-back.png', '2ème'),
('Your Name', 'Kimi no Na wa', 1, 'Romance, Supernatural', 'Mitsuha Miyamizu et Taki Tachibana, deux adolescents de régions différentes du Japon, échangent mystérieusement leurs corps et cherchent à se rencontrer malgré le temps et la distance.', '/public/assets/images/categoriePic/yourname.png', '/public/assets/images/Background/yourname-back.jpg', '3ème');


INSERT INTO AllCategorie (Genre, Synopsis) VALUES
('Global', 'Voici une catégorie concernant les animés que j''ai le plus appréciée.'),
('Fantasy', 'Mondes imaginaires, magie, créatures mythiques et héros mythiques.'),
('Drama', 'Tension émotionnelle intense, conflits personnels, et développement complexe des personnages.'),
('Romance', 'Relations amoureuses, romantisme et développement des personnages autour de l''amour.'),
('Sport', 'Compétitions sportives passionnantes et développement personnel des athlètes.'),
('Comedy', 'Des situations humoristiques et des personnages drôles qui provoquent le rire.'),
('Isekai', 'Des protagonistes sont transportés de notre monde à un autre monde fantastique, où ils doivent s''adapter et souvent jouer un rôle crucial dans ce nouveau monde.'),
('Sci-Fi', 'Technologie avancée, futurisme, et souvent des explorations de futurs alternatifs.'),
('Slice of Life', 'Scènes quotidiennes de la vie quotidienne, souvent avec un accent sur les relations humaines et les émotions.'),
('Film', 'Résumé de la catégorie Film, généralement des longs métrages narratifs ou animés.');





let year = '2022';
let semester = 'sem-5';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {

	'CCE': new School('B', 'Communication and Computer engineering', [])

	
};

let courses = {

	// 'B201': new Course('Artificial Intelligence (LH2)', 'MicroBio', 'C'),
	// 'B202': new Course('Biochemistry (LH3)', 'Biochem', 'E'),

	// 'B301': new Course('Animal Physiology (B1)', 'AnimPhys', 'A'),
	// 'B302': new Course('Plant Physiology (B1)', 'PlantPhys', 'E'),
	// 'B303': new Course('Ecology (LH5)', 'Ecology', 'J'),
	// 'B354': new Course('Neurobiology', 'NeuroBio', 'A'),
	// 'B350': new Course('Structural Biology (B4)', 'StructBio', 'B'),

	// 'B402': new Course('Developmental Biology (B5)', 'DevBio', 'A'),
	// 'B403': new Course('Bioinformatics (LH2)', 'BioInfo', 'E'),
	// 'B451': new Course('Advanced Cell Biology (B5)', 'AdvCellBio', 'D'),

	// 'B551': new Course('Advanced Molecular Biology (B3)', 'AdvMolBio', 'B'),
	// 'B555': new Course('Advanced Genetics (B2)', 'AdvGen', 'C'),

    // CSE
	'B101': new Course('Classical Physics', 'CLP', 'A'),
	'B102': new Course('Mathematics - I ', 'CS', 'D'),
	'B103': new Course('Basic Electronics', 'BE', 'B'),
	'B104': new Course('Computer Programming', 'CP', 'F'),
	'B105': new Course('Technical Communication in English)', 'TCE', 'E'),	
	'B301': new Course('Mathematics  III ', 'MIII', 'H'),	
	'B302': new Course('Digital Circuits and Systems  ', 'DCS', 'I'),	
	'B303': new Course('Computer Organization and Architecture', 'COA', 'J'),	
	'B304': new Course('Information and Database Management Systems', 'IDBMS', 'K'),
    'B305': new Course('Advanced Programming', 'AP', 'L'),
    'B305': new Course('Signals and Systems', 'SNS', 'P'),
  

	

	// 'P201': new Course('Classical Mechanics I (LH2)', 'CM1',E'),
	// 'P202': new Course('Mathematical Methods I (LH2)', 'MM1', 'F'),
	// 'P207': new Course('Linear Optics (P107)', 'LinOptics', 'A'),

	// 'P302': new Course('Statistical Mechanics (LH4)', 'SM', 'E'),
	// 'P303': new Course('Quantum Mechanics II (P127)', 'QM2', 'A'),
	// 'P304': new Course('Special Theory of Relativity (LH3)', 'STR', 'D'),

	// 'P401': new Course('Classical Mechanics II: Mechanics of Continuous Media (P127)', 'CM2', 'D'),
	// 'P405/P305': new Course('Atoms, Molecules and Radiation (P127)', 'AMR', 'E'),
	// 'P453': new Course('Quantum Field Theory I (P108)', 'QFT', 'B'),
	// 'P460': new Course('Many Particle Physics (P109)', 'MPP', 'C'),
	// 'P463': new Course('Astronomy and Astrophysics (P107)', 'AAP', 'C'),
	// 'P466': new Course('Quantum and Nano Elelctronics (P126)', 'QNE', 'A'),
	// 'P475': new Course('Special topics in Quantum Mechanics (P109)', 'STQM', 'A'),
	// 'P476': new Course('Non-Equilibrium Statistical Mechanics (P110)', 'NESH', 'A'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	"#808080",
	"#DE3163",
	"#FF0000",
	"#800000",
	"#FFFF00",
	"#808000",
	"#00FF00",
	"#008000",
	"#00FFFF",
	"#008080",
	"#0000FF",
	"#000080",
	"#FF00FF",
	"#800080",
	"#40E0D0",
];

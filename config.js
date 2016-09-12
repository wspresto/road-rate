var argv = require('yargs').argv;
var VERSION = argv.version || require('./package.json').version;
var TARGET = argv.min ? 'prod' : 'dev';
var BUCKET_TYPE = {
  PEER_GROUP: 'Peer Groups',
  DEPARTMENT: 'Departments',
  CUSTOM: 'Custom Groups'
};

module.exports = {
  version: VERSION,
  target: TARGET,
  src: './app/src/',
  build: './build/',
  paths: {
    scssVars: 'scss/variables.scss',
    ngDocs: './docs/'
  },
  //inject field name from within constants (first child level underneath constants)
  constants: {
    BUCKET_TYPE: BUCKET_TYPE,
    CHOICES: {
      INSTALLATIONS: ['Air Force Academy','Air Force District of Washington','Alconbury','Altus','Andersen','Arnold','Aviano','Barksdale','Beale','Bolling','Buckley','Cannon','Charleston','Columbus','Creech','Croughton','Davis-Monthan','Dobbins','Dover','Dyess','Edwards','Eielson','Eglin','Ellsworth','Elmendorf','F.E. Warren','Fairchild','Forbes Field Air National Guard Base','Fort Smith','Fort Wayne','Fresno Air National Guard Base','Geilenkirchen','General Mitchell Air National Guard Base','Ghedi','Goodfellow','Gowen Field Air National Guard Base','Grand Forks','Great Falls','Grissom Air Reserve Base','Hancock Field Air National Guard Base','Hanscom','Hector Field','Hill','Holloman','Homestead Air Reserve Base','Horsham Air Guard Station','Hulman Field','Hungary Papa','Hurlburt Field','Incirlik','Izmir','Jacksonville','Joe Foss Field','Joint Base Andrews','Joint Base Charleston','Joint Base Elmendorf-Richardson','Joint Base Langley-Eustis','Joint Base Lewis-McChord','Joint Base McGuire-Dix Lakehurst','Joint Base Pearl Harbor-Hickam','Joint Base San Antonio','Joint Forces Headquarters','Kadena','Keesler','Key Field Air National Guard Base','Kingsley Field','Kirtland','Kunsan','Lajes Field','Lakenheath','Laughlin','Lemay Center','Lincoln Municiple Airport','Little Rock','Los Angeles','Louisville','Luke','MacDill','Malmstrom','Mansfield','March','Maxwell-Gunter','McConnell','McEntire Joint National Guard Base','McGhee Tyson Air National Guard Base','Memphis Air National Guard Base','Menwith','Mildenhall','Minneapolis-St. Paul International Airport Air Reserve Base','Minot','Misawa','Moffett Federal Airfield','Molesworth','Moody','Mor??n','Mountain Home','Naval Air Station Ft. Worth','Naval Air Station Joint Reserve Base','Nellis','New Castle Air National Guard Base','Niagara Falls Air Reserve Station','North Highlands Air National Guard Station','Offutt','Olmsted Air National Guard Base','Osan','Otis Air National Guard Base','Papago Military Reservation','Patrick','Pease Air National Guard Base','Pentagon','Peoria','Petersen','Phoenix Sky Harbor Air National Guard Base','Pittsburgh International Airport Air Reserve Station','Pope','Portland Air National Guard Base','Quonset Air National Guard Base','Ramstein','Randolph','Reno Air National Guard Base','Rickenbacker International Airport','Robins','Rome','Rosecrans Air National Guard Base','Rota','Savannah Air National Guard Base','Schriever','Scott','Seymour-Johnson','Shaw','Sheppard','Sioux City Air National Guard Base','Spangdahlem','Springfield Air National Guard Base','Springfield-Beckley Municipal Airport','St Paul Air National Guard Base','Stavanger','Stewart Air National Guard Base','Stout Field','Stratton Air National Guard Base','Swanton Air National Guard Base','Thompson Field','Thule','Tinker','Travis','Truax Field','Tucson International Airport','Tulsa International Airport','Tyndall','Vance','Vandenberg','Volk Field Air National Guard Base','Warfield Air National Guard Base','Westover Air Reserve Base','Whiteman','Will Rogers Air National Guard Base','Wright-Patterson','Yokota','Youngstown Air Reserve Station'],
      OFFICER_AFSC: ['10CX Operations Commander','11AX Airlift Pilot','11BX Bomber Pilot','11EX Experimental Test Pilot','11FX Fighter Pilot','11GX Generalist Pilot','11HX Helicopter Pilot','11KX Trainer Pilot','11MX Mobility Pilot','11RX Reconnaissance/Surveillance/ Electronic Warfare Pilot','11SX Special Operations Pilot','11TX Tanker Pilot','11UX Remotely Operated Aircraft Pilot','12AX Airlift Navigator','12BX Bomber Combat Systems Operator','12EX Experimental Test Combat Systems Officer','12FX Fighter Combat Systems Officer','12GX Generalist Combat Systems Officer','12KX Trainer Combat Systems Officer','12MX Mobility Combat Systems Officer','12RX Reconnaissance/Surveillance/Electronic Warfare Combat Systems Officer','12SX Special Operations Combat Systems Officer','12UX Remotely Operated Aircraft Pilot','13AX Astronaut','13BX Air Battle Manager','13DX Control and Recovery','13LX Air Liaison Officer','13MX Airfield Operation','13SX Space and Missile','14NX Intelligence','15WX Weather','16FX Regional Affairs Strategist','16GX Air Force Operations Staff Officer','16PX Political-Military Affairs Strategist','16RX Planning and Programming','17CX Cyber Operations Commander','17DX Cyberspace Operations','18AX Attack Remotely Piloted Aircraft Pilot','20CX Logistics Commander','21AX Aircraft Maintenance','21MX Munitions and Missile Maintenance','21RX Logistics Readiness','30CX Support Commander','31PX Security Forces','32EX Civil Engineer','33SX Communications and Information','35BX Band 2','35PX Public Affairs','36PX Personnel Officer','38FX Force Support Officer','40CX Medical Commander','41AX Health Services Administrator','42BX Physical Therapist','42EX Optometrist','42FX Podiatrist','42GX Physician Assistant','42NX Audiology/Speech Pathologist','42PX Clinical Psychologist','42SX Clinical Social Worker','42TX Occupational Therapist','43AX Aerospace and Operational Physiologist','43BX Biomedical Scientist','43DX Dietitian','43EX Bioenvironmental Engineer','43HX Public Health','43MX Medical Entomologist','43PX Pharmacist','43TX Biomedical Laboratory',"'44AX Chief, Hospital/Clinic Services'",'44BX Preventive Medicine','44DX Pathologist','44EX Emergency Services Physician','44FX Family Physician','44GX General Practice Physician','44JX Clinical Geneticist','44KX Pediatrician','44MX Internist','44NX Neurologist','44PX Psychiatrist','44RX Diagnostic Radiologist','44SX Dermatologist','44TX Radiotherapist','44UX Occupational Medicine','44YX Critical Care Medicine','44ZX Allergist','45AX Anesthesiologist','45BX Orthopedic Surgeon','45EX Ophthalmologist','45GX OB/GYN','45NX Otorhinolaryngologist','45PX Physical Medicine Physician','45SX Surgeon','45UX Urologist','46AX Nurse Administrator','46FX Flight Nurse','46NX Clinical Nurse','46PX Mental Health Nurse','46SX Operating Room Nurse','46YX Privileged Advanced Practice Nurse','47BX Orthodontist','47DX Oral and Maxillofacial Pathologist','47EX Endodontist','47GX Dentist','47HX Periodontist','47KX Pediatric Dentist','47PX Prosthodontist','47SX Oral and Maxillofacial Surgeon','48AX Aerospace Medicine Specialist','48GX General Medical Officer Flight Surgeon','48RX Residency Trained Flight Surgeon','48VX Pilot-Physician','51JX Judge Advocate','52RX Chaplain','60CX Program Director','61AX Operations Research Analyst','61BX Behaviorial Science/Human Scientist','61CX Chemist','61DX Physicist/Nuclear Engineer','61SX Scientist','62EX Developmental Engineer','62SX Materiel Leader','63AX Acquisition Manager','63GX Senior Materiel Leader','63SX Materiel Leader','64PX Contracting','65FX Financial Management','65WX Cost Analysis','71SX Special Investigations',"'80CX Commander, Cadet Squadron, USAFA'","'81CX Training Commander, OTS'",'81TX Instructor','82AX Academic Program Manager','83RX Recruiting Service','85GX U.S. Air Force Honor Guard','86MX Operations Management','86PX Command and Control','87GX Installation Inspector General','88AX Aide-de-camp','90GX General Officer','91CX Commander','91WX Wing Commander','92JX Non-designated Lawyer','92MX Medical Student','92SX Student Officer Authorization','92TX Pilot Trainee','93PX Patient','96DX Officer not avail in awarded AFSC','96UX Unclassified Officer','97EX Executive Officer', 'Non Air Force'],
      ENLISTED_AFSC: ['1A0XX In-Flight Refueling','1A1XX Flight Engineer','1A2XX Aircraft Loadmaster','1A3XX Airborne Mission System','1A4XX Airborne Operations','1A6XX Flight Attendant','1A7XX Aerial Gunner','1A8XX Airborne Cryptologic Linguist','1B4XX Cyberspace Defense Operations','1C0XX Aviation Resource Management','1C1XX Air Traffic Control','1C2XX Combat Control','1C3XX Command Post','1C4XX Tactical Air Control Party','1C5XX Command and Control Battle Management Operations','1C6XX Space Systems Operations','1C7XX Airfield Management','1C8XX Airfield Systems','1N0XX Operations Intelligence','1N1XX Geospatial Intelligence','1N2XX Signals Intelligence Analyst','1N3XX Cryptologic Language Analyst','1N4XX Network Intelligence Analyst','1POXX Aircrew Flight Equipment','1S0XX Safety',"'1T0XX Survival, Evasion, Resistance and Escape'",'1T2XX Pararescue','1U0XX Career RPA Sensor Operator','1W0XX Special Operations Weather','2A0XX Avionics Test Station and Components','2A3XX Avionics Systems','2A5XX Aerospace Maintenance','2A6XX Aerospace Propulsion','2A7XX Aircraft Metals Technology',"'2E1XX Satellite, Wideband and Telemetry Systems'",'2E2XX Network Infrastructure Systems','2E6XX Communication Cable and Antenna Systems','2F0XX Fuels','2G0XX Logistics Plans','2M0XX Missile Maintenance','2P0XX Precision Measurement Equipment Laboratory','2R0XX Maintenance Management Analysis','2R1XX Maintenance Management Production','2S0XX Materiel Management','2T0XX Traffic Management','2T1XX Vehicle Operations','2T2XX Air Transportation','2T3XX Vehicle Maintenance','2W0XX Munitions Systems','2W1XX Aircraft Armament Systems','2W2XX Nuclear Weapons','3A0XX Knowledge Operations Management','3C0XX Communication-Computer Systems','3C1XX Information Systems Technology','3C2XX Network Integration','3D0XX Knowledge Operations Management','3D1XX Client Systems','3E0XX Electrical Systems',"'3E1XX Heating, Ventilation, AC, Refrigeration'",'3E2XX Pavement and Construction Equipment','3E3XX Structural','3E4XX Water and Fuel Systems Maintenance','3E5XX Engineering','3E6XX Operations Management','3E7XX Fire Protection','3E8XX Explosive Ordnance Disposal','3E9XX Emergency Management','3M0XX Services','3N0XX Public Affairs','3N1XX Regional Band','3N2XX Premier Band','3P0XX Security Forces','3S0XX Personnel','3S1XX Equal Opportunity','3S2XX Education and Training','3S3XX Manpower','4A0XX Health Services Management','4A1XX Medical Material','4A2XX Biomedical Equipment','4B0XX Bioenvironmental Engineering','4C0XX Mental Health Service','4D0XX Diet Therapy','4E0XX Public Health','4H0XX Cardiopulmonary Laboratory','4J0XX Physical Medicine','4M0XX Aerospace and Operational Physiology','4N0XX Aerospace Medical Service','4N1XX Surgical Service','4P0XX Pharmacy','4R0XX Diagnostic Imaging','4T0XX Medical Laboratory','4V0XX Ophthalmic','4Y0XX Dental Assistant','5J0XX Paralegal','5R0XX Chaplain Assistant','6C0XX Contracting','6F0XX Financial Management and Comptroller','7S0XX Special Investigations','8A1XX Career Assistance Adviser','8A2XX Enlisted Aide','8B0XX Military Training Instructor','8B1XX Military Training Leader','8B2XX Academy Military Training NCO','8C0XX Airmen/Family Readiness Center','8D0XX Strategic Debriefer','8F0XX First Sergeant','8G0XX Honor Guard','8H0XX Airman Dorm Leader','8M0XX Postal','8P0XX Courier','8P1XX Defense Attaché','8R0XX Enlisted Accessions Recruiter','8R2XX Second-Tier Recruiter','8R3XX Third-Tier Recruiter','8S0XX Missile Facility Manager','8T0XX Professional Military Education Instructor','9D0XX Dormitory Manager','9E0XX Command Chief Master Sergeant','9F0XX First Term Airmen Center','9L0XX Interpreter/Translator','9S1XX Scientific Applications Specialist', 'Non Air Force'],
      MAJCOM: ['Air Combat Command','Air Education and Training Command','Air Force Global Strike Command','Air Force Materiel Command','Air Force Reserve Command','Air Force Space Command','Air Force Special Operations Command','U.S. Air Forces Central Command','Air Mobility Command','Air National Guard','Pacific Air Forces','U.S. Air Forces in Europe and Air Forces Africa'],
      HAF_SAF: ['A1','A10','A2','A3','A4','A5/8','A6','A9','AA','AQ','FM','GC','HC','HO','IA','IG','JA','LL','MG','MGB','MGI','MGM','MR','NGB','PA','RE','SE','SG','ST','TE'],
      DRU: ['Air Force District of Washington','Air Force Operational Test and Evaluation Center','Development Complex','U.S. Air Force Academy'],
      FOA: ['Air Force Agency for Modeling and Simulation','Air Force Audit Agency','Air Force Cost Analysis Agency','Air Force Flight Standards Agency','Air Force Historical Research Agency','Air Force Inspection Agency','Air Force Legal Operations Agency','Air Force Office of Special Investigations','Air Force Operations Group','Air Force Personnel Center','Air Force Public Affairs Agency','Air Force Manpower Analysis Agency','Air Force Medical Operations Agency','Air Force Medical Support Agency','Air Force Mortuary Affairs Operations','Air Force Program Executive Office','Air Force Review Boards Agency','Air Force Safety Center','National Air and Space Intelligence Center'],
      NAF: ['10th Air Force','11th Air Force','12th Air Force (Air Forces Southern)','14th Air Force','18th Air Force','1st Air Force','20th Air Force','22nd Air Force','24th Air Force','25th Air Force',"'3rd Air Force, 17th Expeditionary Air Force'",'4th Air Force','5th Air Force','7th Air Force','8th Air Force','9th Air Force'],
      CENTER: ['HQ AFMC', 'AFLCMC', 'AFSC', 'AFTC', 'AFNWC', 'AFRL', 'AFIMSC']
    },
    CPI_GROUPNAMES: ['Level 0 User', 'Level 1 User',  'Level 2 User (Installation POCs)', 'Level 3 User (MAJCOM-FOA-DRU Master Process Offices)', 'Level 4 User (MGM POCs)', 'Level 1 Admin (HAF-SAF Admins)', 'Level 2 Admin (MGM POCs)'],
    PRACTITIONERS_ID: '11614daf-86df-4d7d-a255-415bc0d6acb4',
    PRACTITIONERS_FIELD_MAPPING: {
      Title: 'Name',
      Level: 'Level',
      ActiveDutyStatus: 'Status',
      AFSC: 'Enlisted_AFSC',
      OfficerAFSC: 'Officer_AFSC',
      Email: 'Email',
      Installation_x0020_MPO_x0020_Ema: 'Installation_MPO_Email',
      MAJCOM_x002f_DRU_x002f_FOA_x0020: 'MAJCOM_DRU_FOA_MPO_Email',
      Organization: 'Organization',
      MAJCOM: 'MAJCOM',
      HAF_x002f_SAF: 'HAF_SAF',
      Center: 'Center',
      FOA: 'FOA',
      NAF: 'NAF',
      Directorate: 'Directorate',
      DRU: 'DRU',
      Installation: 'Installation',
      Attended_x0020_CPI_x0020_Course: 'GreenBelt_Attended_CPI_Course',
      Attended_x0020_CPI_x0020_Course_: 'GreenBelt_Attended_CPI_Course_YN',
      CourseDateGreen: 'GreenBelt_Course_Date',
      Successfully_x0020_Complete_x002: 'GreenBelt_Successfully_Complete_CPI_Knowledge_Exam',
      Successfully_x0020_Complete_x0020: 'GreenBelt_Successfully_Complete_CPI_Knowledge_Exam_YN',
      Successfully_x0020_Complete_x0021: 'GreenBelt_Successfully_Complete_CPI_Knowledge_Exam_Date',
      Assignment_x0020_to_x0020_Formal: 'GreenBelt_Assignment_to_Formal_CPI_Role',
      Demonstrate_x0020_CPI_x0020_Abil: 'GreenBelt_Demonstrate_CPI_Abilities',
      Demonstrate_x0020_CPI_x0020_Abil0: 'GreenBelt_Demonstrate_CPI_Abilities_YN',
      Demonstrate_x0020_CPI_x0020_Abil1: 'GreenBelt_Demonstrate_CPI_Abilities_Date',
      Endorsed_x0020_by_x0020_Commande: 'GreenBelt_Endorsed_By_Commander',
      GBDateCertified: 'GreenBelt_Date_Certified',
      SEI: 'GreenBelt_SEI',
      SEI_x0020_YN: 'GreenBelt_SEI_YN',
      SEI_x0020_Date: 'GreenBelt_SEI_Date',

      AttendedBlackCourse: 'BlackBelt_Attended_CPI_Course',
      field13 : 'BlackBelt_Attended_CPI_Course_YN',
      field17 : 'BlackBelt_Course_Date',
      SuccessfullyCompletedBlack : 'BlackBelt_Successfully_Complete_CPI_Knowledge_Exam',
      field14 : 'BlackBelt_Successfully_Complete_CPI_Knowledge_Exam_YN',
      field18 : 'BlackBelt_Successfully_Complete_CPI_Knowledge_Exam_Date',
      BlackBeltAssignment : 'BlackBelt_Assignment_to_Formal_CPI_Role',
      DemonstratedBlack : 'BlackBelt_Demonstrate_CPI_Abilities',
      field15 : 'BlackBelt_Demonstrate_CPI_Abilities_YN',
      field19 : 'BlackBelt_Demonstrate_CPI_Abilities_Date',
      EndorsedbyCommanderBlack : 'BlackBelt_Endorsed_By_Commander',
      DateCertifiedBlack : 'BlackBelt_Date_Certified',
      SEIBlack : 'BlackBelt_SEI',
      SEIBlackYN : 'BlackBelt_SEI_YN',
      SEIBlackDate : 'BlackBelt_SEI_Date',

      AttendedGreenCourse: 'MasterBlackBelt_Attended_CPI_Course',
      field6  : 'MasterBlackBelt_Attended_CPI_Course_YN',
      field9  : 'MasterBlackBelt_Course_Date',
      CompletedGreen  : 'MasterBlackBelt_Successfully_Complete_CPI_Knowledge_Exam',
      field7  : 'MasterBlackBelt_Successfully_Complete_CPI_Knowledge_Exam_YN',
      field10  : 'MasterBlackBelt_Successfully_Complete_CPI_Knowledge_Exam_Date',
      GreenBeltAssignment   : 'MasterBlackBelt_Assignment_to_Formal_CPI_Role',
      DemonstratedGreen : 'MasterBlackBelt_Demonstrate_CPI_Abilities',
      field8  : 'MasterBlackBelt_Demonstrate_CPI_Abilities_YN',
      field11  : 'MasterBlackBelt_Demonstrate_CPI_Abilities_Date',
      EndorsedByCommanderGreen  : 'MasterBlackBelt_Endorsed_By_Commander',
      field12  : 'MasterBlackBelt_Date_Certified',
      SEIGreen  : 'MasterBlackBelt_SEI',
      SEIGreenYN  : 'MasterBlackBelt_SEI_YN',
      SEIGreenDate  : 'MasterBlackBelt_SEI_Date',

      ProjFacilitationDate : 'Project_Facilitation_Date',
      field5 : 'Project_Mentorship_Date',
      Equivalency_x0020_Credentials : 'Equivalency_Credentials_YN',
      Equivalency_x0020_Credentials_x0 : 'Equivalency_Credentials_Date',
      SAF_x002f_US_x0028_M_x0029_S_x00 : 'SAF_US_M_S_Evaluates_Academic_Background',
      SAF_x002f_US_x0028_M_x0029_S_x001 : 'SAF_US_M_S_Evaluates_Academic_Background_YN',
      SAF_x002f_US_x0028_M_x0029_S_x000 : 'SAF_US_M_S_Evaluates_Academic_Background_Date',
      AF_x0020_CPI_x0020_Examination : 'AF_CPI_Examination_YN',
      AF_x0020_CPI_x0020_Examination_x : 'AF_CPI_Examination_Date',
      User_x0020_Who_x0020_Last_x0020_ : 'User_Who_Last_Modified'

    }

  },
  globs: {
    sass: ['+(app|scss)/**/!(variables).scss'],
    dist: ['../dist/**/*'],
    aspx: ['./src/sharepoint/*.aspx'],
    sharepoint: ['sharepoint/**/*.{css,js}'],
    templates: ['./src/app/**/*.html'],
    scripts: ['app/**/*module*.js', 'app/**/*.js'],
    assets: ['assets/**/*']
  },
  fonts: {
      dev: [
      ],
      prod: [
      ]
  },
  cssLibs: {
      dev: [
        'angular-material/angular-material.css'
      ],
      prod: [
        'angular-material/angular-material.min.css'
      ]
  },
  libs: {
   dev: [
      'angular/angular.js',
      'angular-animate/angular-animate.js',
      'angular-aria/angular-aria.js',
      'angular-material/angular-material.js',
      'angular-ui-router/build/angular-ui-router.js',
      'underscore/underscore.js',
      'spin.js/spin.js',
      'angular-spinner/angular-spinner.js',
      '../sub_modules/sharepoint-jsom-services/dist/sharepoint.jsom.services.js'
      ],
    prod: [
      'angular/angular.min.js',
      'angular-animate/angular-animate.min.js',
      'angular-aria/angular-aria.min.js',
      'angular-material/angular-material.min.js',
      'angular-ui-router/build/angular-ui-router.min.js',
      'spin.js/spin.js',
      'angular-spinner/angular-spinner.js',
      'underscore/underscore.js',      
      '../sub_modules/sharepoint-jsom-services/dist/sharepoint.jsom.services.js'
    ]
  }
};

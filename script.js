const SUPABASE_URL = 'https://yetisopmljafuqqquiju.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlldGlzb3BtbGphZnVxcXF1aWp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NDA4MzUsImV4cCI6MjA5MzMxNjgzNX0.Vbis7ldxf7_UiuS6wAWAKr_iO0kOYv0ylK8aVLCjOnw';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
 
const DB = [
  {
    id:1, name:"Korean Government Scholarship Program (GKS) — Undergraduate",
    host:"South Korea", body:"National Institute for International Education (NIIED)",
    flag:"🇰🇷", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"September – February each year",
    gpa:"Minimum GPA 2.64/4.0 or 80%",
    age:"Under 25 years old at time of application",
    language:"TOPIK Level 3 or IELTS 5.5 / TOEFL 71 (not mandatory but highly recommended)",
    open_to:"All nationalities (developing countries prioritized)",
    covered:["Full tuition waiver","Monthly stipend of KRW 900,000 (~$700)","Round-trip economy airfare","Accommodation in university dormitory","Korean language training course (1 year)","Medical insurance coverage","Settlement allowance KRW 200,000"],
    eligibility:["Must be a citizen of a GKS partner country","Under 25 years at application date","Must hold or expect a high school diploma","GPA equivalent of minimum C+ or higher","Both parents must not be Korean nationals","Must be in good health (medical examination required)"],
    docs:["Completed GKS application form","Passport copy (valid 6+ months)","High school diploma or expected graduation letter","Official high school transcripts (all years)","Two letters of recommendation (teachers/counselors)","Personal statement / study plan (2 pages)","Medical examination report","TOPIK or English proficiency test scores","Proof of nationality (birth certificate)","Self-introduction essay"],
    tip:"Apply through both the Korean Embassy in your country AND directly to universities for a double chance. Embassy track is less competitive.",
    link:"https://www.studyinkorea.go.kr/en/sub/gks/allnew_under.do"
  },
  {
    id:2, name:"Korean Government Scholarship Program (GKS) — Graduate",
    host:"South Korea", body:"National Institute for International Education (NIIED)",
    flag:"🇰🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"September – March each year",
    gpa:"Minimum GPA 2.64/4.0 or 80%",
    age:"Under 40 for Master's, Under 45 for PhD",
    language:"TOPIK Level 3 or IELTS 5.5 / TOEFL 71 (not mandatory but highly recommended)",
    open_to:"All nationalities (developing countries)",
    covered:["Full tuition waiver","Monthly stipend KRW 900,000 (Master's) / KRW 1,000,000 (PhD)","Round-trip economy airfare","University dormitory accommodation","Korean language course (1 year)","Health insurance","Research allowance KRW 210,000/month","Settlement & travel allowances"],
    eligibility:["Citizen of a GKS partner country","Must hold a bachelor's degree for Master's / Master's for PhD","GPA minimum 2.64/4.0 or 80%","Under 40 years (Master's) or 45 years (PhD)","Both parents not Korean nationals","Good health — medical exam required"],
    docs:["GKS application form","Passport copy","Bachelor's / Master's degree certificate","Official academic transcripts","Two recommendation letters (professors/employers)","Study plan / research proposal","Medical examination report","Language test scores (TOPIK/IELTS/TOEFL)","Personal statement","Awards or certificates (if any)"],
    tip:"Write your research proposal specifically tailored to a Korean professor's ongoing research. Email professors before applying — getting a pre-acceptance letter dramatically improves your chances.",
    link:"https://www.studyinkorea.go.kr/en/sub/gks/allnew_gradu.do"
  },
  {
    id:3, name:"MEXT Japanese Government Scholarship",
    host:"Japan", body:"Ministry of Education, Culture, Sports, Science and Technology (MEXT)",
    flag:"🇯🇵", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"April – June each year (Embassy track)",
    gpa:"Minimum 70% (you must pass MEXT screening exam)",
    age:"Under 35 years (Research Students)",
    language:"Japanese or English depending on program",
    open_to:"All nationalities (through Japanese embassies)",
    covered:["Full tuition waiver (all years)","Monthly stipend ¥117,000 – ¥145,000 (~$800–$990)","Round-trip economy airfare","No accommodation allowance (stipend covers it)","Japanese language training","Exemption from entrance exam fees"],
    eligibility:["Citizen of a country with diplomatic relations with Japan","Meet the academic requirements of the target school","Good health and character","Not holding Japanese nationality","Apply through Japanese Embassy in home country","Pass the MEXT written examination and interview"],
    docs:["MEXT application form","Passport copy","High school / bachelor's / master's certificate","Official transcripts (sealed)","Letter of recommendation from school principal or professor","Health certificate (MEXT form)","Research plan / study plan","Photographs (MEXT specified size)","Language proficiency evidence","Copy of any academic publications or awards"],
    tip:"Contact Japanese professors directly via email with your research plan before submitting — securing a 'Letter of Acceptance' from a Japanese professor as a University-recommended applicant bypasses the competitive Embassy track.",
    link:"https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm"
  },
  {
    id:4, name:"Chinese Government Scholarship (CSC)",
    host:"China", body:"China Scholarship Council (CSC)",
    flag:"🇨🇳", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January – April each year",
    gpa:"Minimum 75–80% (varies by university)",
    age:"Under 25 (undergrad), Under 35 (Master's), Under 40 (PhD)",
    language:"HSK 4+ for Chinese-taught programs; IELTS 6.0 for English-taught",
    open_to:"All nationalities",
    covered:["Full tuition waiver","Monthly stipend CNY 2,500 – 3,500 (~$350–$490)","University accommodation on campus","Comprehensive medical insurance","Round-trip economy airfare (for some categories)"],
    eligibility:["Not a Chinese citizen","Under the age limit for chosen level","Minimum 75–80% academic average","Good health and character","No criminal record","Applying to a Chinese government authorized university"],
    docs:["CSC online application form","Passport copy","Highest degree certificate and transcripts","Two recommendation letters (professors)","Study plan or research proposal","Medical examination form (CSC specified)","Language proficiency certificate","Non-criminal record certificate","Copy of any publications (PhD applicants)","Acceptance letter from Chinese university (if available)"],
    tip:"Apply to at least 3 Chinese universities simultaneously and rank them on the CSC application. Universities like BIT, HUST, NUAA, and SCUT have higher acceptance rates than top-5 universities for international scholarship students.",
    link:"https://www.campuschina.org/content/details3_74776.html"
  },
  {
    id:5, name:"CPEC Scholarship (China-Pakistan Economic Corridor)",
    host:"China", body:"China Scholarship Council / HEC Pakistan",
    flag:"🇨🇳", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"pakistan_only",
    exclusive_to:["pakistan"],
    fields:"Engineering, Technology, Business, Sciences",
    deadline:"March – May each year",
    gpa:"Minimum 60% marks in last qualification",
    age:"Under 35 years",
    language:"IELTS 5.0 or Chinese language test (HSK)",
    open_to:"Pakistani nationals only",
    covered:["Full tuition waiver","Monthly stipend (~$350–490)","Campus accommodation","Medical insurance","Airfare support for some tracks"],
    eligibility:["Pakistani national only","Minimum 60% in last degree","Priority given to STEM and engineering fields","Must pass HEC's selection process","Good health and no criminal record","Under 35 years of age"],
    docs:["Passport copy","Last degree certificate & transcripts","Two recommendation letters","Personal statement / study plan","Medical examination certificate","Domicile certificate (Pakistani)","CNIC copy","HEC application form","English or Chinese proficiency certificate","No objection certificate (NOC) if employed"],
    tip:"Apply through HEC Pakistan's official portal — the process is competitive so submit as early as possible. Engineering and IT fields have the highest placement success rates.",
    link:"https://hec.gov.pk/english/scholarshipsgrants/Pages/CPEC-Scholarships.aspx"
  },
  {
    id:6, name:"Türkiye Burslari (Turkish Government Scholarship)",
    host:"Turkey", body:"Türkiye Scholarships / Presidency for Turks Abroad",
    flag:"🇹🇷", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Applications open January, deadline February each year",
    gpa:"Minimum 70% (undergrad), 75% (master's/PhD)",
    age:"Under 21 (undergrad), Under 30 (master's), Under 35 (PhD)",
    language:"Turkish or English depending on program",
    open_to:"All nationalities except Turkish citizens",
    covered:["Full tuition waiver","Monthly stipend TRY 800–1,600 (~$26–52 currently, varies)","Free on-campus accommodation","Round-trip airfare","Turkish language course (1 year free)","Health insurance","Travel allowance"],
    eligibility:["Not a Turkish citizen","Minimum GPA: 70% (undergrad) or 75% (grad)","Under the age limit for your level","Applying to an undergraduate program for the first time (undergrad track)","Good health and character","Strong motivation for studying in Turkey"],
    docs:["Online Türkiye Burslari application","Passport copy","High school diploma or degree certificate","Official transcripts","Two recommendation letters","Study plan / motivation letter","Medical certificate","Language proficiency certificate (if available)","Copy of any awards or achievements","Photograph"],
    tip:"The interview is the most important part. Research Turkey's relations with your country and demonstrate genuine interest in Turkey — cultural knowledge makes a strong impression on the panel.",
    link:"https://www.turkiyeburslari.gov.tr/en"
  },
  {
    id:7, name:"Chevening Scholarship",
    host:"United Kingdom", body:"UK Foreign, Commonwealth & Development Office",
    flag:"🇬🇧", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Applications open August, deadline November each year",
    gpa:"Minimum 2:1 equivalent bachelor's degree",
    age:"No age limit",
    language:"IELTS 6.5 overall (no band below 5.5)",
    open_to:"Eligible countries (check Chevening website)",
    covered:["Full university tuition fees","Monthly living allowance (~£1,359/month in London)","Economy airfare (return)","Arrival allowance","Homeward departure allowance","UK Visas and Immigration fee","Thesis grant"],
    eligibility:["Citizen of a Chevening-eligible country","Minimum 2 years of work experience by November deadline","Hold a bachelor's degree equivalent to UK 2:1","Apply to 3 different UK universities","Commit to return to home country for 2 years after scholarship","Strong leadership and networking potential"],
    docs:["Online Chevening application","Passport copy","Bachelor's degree certificate and transcripts","Two references from professional/academic contacts","Personal statements (leadership, networking, studying in UK, career plan)","IELTS/TOEFL/OET scores","Evidence of work experience (employment letters)","University acceptance letters (3 UK universities)","CV / resume"],
    tip:"Chevening wants leaders, not just students. Focus your essays on specific examples of leadership and networking — vague answers fail. Apply to 3 UK universities simultaneously and get conditional offers before the Chevening deadline.",
    link:"https://www.chevening.org/apply/"
  },
  {
    id:8, name:"Commonwealth Scholarship (UK)",
    host:"United Kingdom", body:"Commonwealth Scholarship Commission",
    flag:"🇬🇧", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"commonwealth",
    exclusive_to:[],
    fields:"Development-related fields prioritized",
    deadline:"Applications typically open October, close December",
    gpa:"First class or strong upper-second bachelor's",
    age:"No specific age limit",
    language:"English proficiency — native or demonstrated",
    open_to:"Citizens of Commonwealth countries",
    covered:["Full university tuition fees","Monthly living stipend (~£1,236/month)","Economy airfare (return)","Thesis grant","Study travel grant","Warm clothing allowance"],
    eligibility:["Citizen of a Commonwealth country","Strong academic record (first class or upper second)","Commitment to development impact in home country","Not currently living in a developed country","Must apply to UK universities","Proposed study must benefit home country development"],
    docs:["CSC online application form","Passport copy","Bachelor's degree certificate","Official transcripts (sealed)","Two academic references","Personal statement emphasizing development impact","Supporting letter from home country institution (PhD)","Research proposal (PhD track)","IELTS/TOEFL (if required by university)","CV / resume"],
    tip:"The development impact question is make-or-break. Be very specific about how your degree will directly benefit your home country — generic answers are rejected. Give concrete examples and plans.",
    link:"https://cscuk.fcdo.gov.uk/apply/"
  },
  {
    id:9, name:"Fulbright Foreign Student Program",
    host:"United States", body:"U.S. Department of State / Fulbright Commission",
    flag:"🇺🇸", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Varies by country — typically February – October",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No age limit (varies by country)",
    language:"IELTS 6.5 or TOEFL iBT 79+",
    open_to:"All nationalities (apply through Fulbright in your country)",
    covered:["Full tuition at US university","Monthly stipend (varies ~$1,000–2,500)","Round-trip economy airfare","Health insurance","Books and supplies allowance","English language training (if needed)"],
    eligibility:["Citizen of a Fulbright-participating country","Strong academic and professional background","Apply through Fulbright commission or US Embassy in home country","Commitment to return to home country after degree","No current US citizenship or permanent residency","TOEFL/IELTS requirement"],
    docs:["Fulbright online application","Passport copy","Bachelor's degree certificate and transcripts","Three recommendation letters","Study/research objective statement","Personal statement","TOEFL iBT or IELTS scores","CV / resume","Writing samples (some fields)","GRE scores (some fields and universities)"],
    tip:"For Pakistan, apply through USEFP (United States Educational Foundation in Pakistan). The interview is rigorous — prepare thoroughly on your field and why you specifically want to go to the US.",
    link:"https://foreign.fulbrightonline.org/"
  },
  {
    id:10, name:"DAAD Scholarships (Germany)",
    host:"Germany", body:"German Academic Exchange Service (DAAD)",
    flag:"🇩🇪", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Varies by program — typically October – November",
    gpa:"Minimum above-average academic record of around 3.0–3.5+ on a 4.0 scale or top-third in class",
    age:"Under 36 for Development-related programs",
    language:"German (B2 for German programs) or English (B2/IELTS 6.0)",
    open_to:"All nationalities (developing countries)",
    covered:["Full tuition (most programs)","Monthly stipend €934 (Master's) or €1,200 (PhD)","Travel allowance","Health insurance subsidy","Study allowance","Family allowance (if applicable)"],
    eligibility:["Bachelor's degree with above-average grades","Relevant work experience (some programs require 2 years)","Language proficiency (German or English)","Commitment to contribute to home country development","Apply to German university program simultaneously","Must not have been resident in Germany for more than 15 months"],
    docs:["DAAD online application","Passport copy","Bachelor's / Master's degree and transcripts","Two recommendation letters","Motivation letter / study plan","CV / resume","Language certificate (IELTS / TestDaF / Goethe)","Proof of university application (Germany)","Portfolio (design fields)","Publications list (PhD applicants)"],
    tip:"DAAD strongly values the 'return and contribute' angle — your motivation letter must clearly explain how your German degree will benefit your home country. Vague career goals hurt your application.",
    link:"https://www.daad.de/en/study-and-research-in-germany/scholarships/"
  },
  {
    id:11, name:"HEC Overseas Scholarship for PhD",
    host:"Various (UK, USA, Europe, Australia)",
    body:"Higher Education Commission Pakistan",
    flag:"🇵🇰", funding:"full",
    levels:["phd"],
    eligible_countries:"pakistan_only",
    exclusive_to:["pakistan"],
    fields:"All Fields (STEM prioritized)",
    deadline:"Applications open multiple times a year — check HEC portal",
    gpa:"Minimum 60% in Master's degree",
    age:"Under 35 years",
    language:"IELTS 6.5 or TOEFL 91 (for English-medium countries)",
    open_to:"Pakistani nationals only",
    covered:["Full tuition fees paid directly to university","Monthly living stipend (~$1,500–2,500 depending on country)","Return economy airfare","Research consumables allowance","Health insurance","Spouse and children allowances (limited)"],
    eligibility:["Pakistani national","Minimum 60% in last degree (Master's or equivalent)","Faculty or researcher at HEC-recognized institution (priority)","Under 35 years of age","Must secure admission at a top-ranked foreign university","Return to Pakistan after completion (mandatory bond)"],
    docs:["HEC online application form","CNIC / Passport","Master's degree and transcripts","Acceptance letter from foreign university (top 200 ranked)","Supervisor's agreement letter from foreign university","Two academic recommendation letters","Research proposal","IELTS / TOEFL scores","Medical fitness certificate","NOC from current employer (if applicable)"],
    tip:"The most critical step is getting a formal Letter of Acceptance AND a supervisor agreement from a ranked university BEFORE applying to HEC. Without this, your application will not progress.",
    link:"https://hec.gov.pk/english/scholarshipsgrants/Pages/OverseasScholarship.aspx"
  },
  {
    id:12, name:"HEC Need-Based Scholarship",
    host:"Pakistan", body:"Higher Education Commission Pakistan",
    flag:"🇵🇰", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"pakistan_only",
    exclusive_to:["pakistan"],
    fields:"All Fields",
    deadline:"August – September each academic year",
    gpa:"Minimum 60% in Matric and Intermediate",
    age:"No age limit",
    language:"No language test required",
    open_to:"Pakistani nationals only",
    covered:["Semester fee subsidy (full or partial)","Monthly stipend PKR 4,000","Books and stationery allowance"],
    eligibility:["Pakistani national enrolled in HEC-recognized university","Family income below PKR 45,000/month","Minimum 60% in Matric and FSc/A-Levels","Not receiving any other scholarship","Enrolled in semester 1–8 of bachelor's","Strong academic motivation letter"],
    docs:["HEC application form","CNIC / B-Form copy","Income certificate from local government","Matric and FSc certificates and marksheets","Admission letter from university","Bank account details","Domicile certificate","Two passport photographs","Personal statement","Parent's income proof documents"],
    tip:"The family income certificate from your Union Council or Tehsil Office is the most important document — get it early because it takes time. Attach any proof of hardship like medical bills or death of breadwinner.",
    link:"https://hec.gov.pk/english/scholarshipsgrants/Pages/NeedBased.aspx"
  },
  {
    id:13, name:"Ehsaas Undergraduate Scholarship",
    host:"Pakistan", body:"Government of Pakistan / HEC",
    flag:"🇵🇰", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"pakistan_only",
    exclusive_to:["pakistan"],
    fields:"All Fields",
    deadline:"August – September each year",
    gpa:"Minimum 60% in Matric and 60% in Intermediate",
    age:"No age limit",
    language:"No requirement",
    open_to:"Pakistani nationals — low income families",
    covered:["Tuition fee support (up to PKR 50,000 per semester)","Monthly living allowance PKR 4,000","Exam fee support"],
    eligibility:["Pakistani national","Family income below PKR 45,000/month","Minimum 60% in Matric and Intermediate","Enrolled in HEC-recognized university","Not benefiting from any other scholarship","First generation college student (priority)"],
    docs:["Ehsaas/PASS ID (poverty score card)","CNIC and B-Form","Matric and FSc certificates and marksheets","University enrollment letter","Income affidavit from BPS-17 officer","Bank account with student name","Domicile certificate","Two passport photographs","University fee challan","Father's death certificate (if applicable)"],
    tip:"Register for BISP/Ehsaas NSER survey to get your poverty score — without a PASS ID score below the cutoff, you cannot apply. Many students miss the scholarship just because of this step.",
    link:"https://ehsaas.ndma.gov.pk/"
  },
  {
    id:14, name:"Swedish Institute Scholarship",
    host:"Sweden", body:"Swedish Institute",
    flag:"🇸🇪", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Applications open October, close February each year",
    gpa:"Strong bachelor's degree, no fixed percentage",
    age:"No age limit",
    language:"English (IELTS 6.5 or TOEFL 90 typically required by universities)",
    open_to:"Citizens of eligible developing countries",
    covered:["Full university tuition fees","Monthly living grant SEK 11,000 (~$1,000)","Travel grant (one-time)","Insurance coverage","Networking events and leadership program"],
    eligibility:["Citizen of an SI-eligible country (check website)","At least 3,000 hours of work experience","Applying to master's in Sweden","Demonstrated leadership and commitment to home country development","IELTS / TOEFL requirement from Swedish universities","Apply through SI portal linked to university application"],
    docs:["SI online application","Passport copy","Bachelor's degree and transcripts","CV / resume","Work experience certificates (minimum 3,000 hours)","Two references","Motivation letter (leadership and development focus)","University application confirmation","IELTS / TOEFL scores","Proof of any community work or NGO involvement"],
    tip:"SI strongly prioritizes leadership and community contribution. Document every volunteer role, community initiative, or leadership position — paid work alone is not enough. Your motivation letter must link your degree to development in your country.",
    link:"https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/"
  },
  {
    id:15, name:"Stipendium Hungaricum (Hungary)",
    host:"Hungary", body:"Hungarian Government / Tempus Public Foundation",
    flag:"🇭🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all_partner",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Nominations by February – March each year (apply through home country ministry)",
    gpa:"Good academic record (no fixed minimum CGPA)",
    age:"No fixed age limit",
    language:"English or Hungarian (depends on program)",
    open_to:"Citizens of partner countries (check list)",
    covered:["Full tuition waiver","Monthly stipend HUF 43,700 – 140,000 (~$115–370)","Free dormitory accommodation","Medical insurance subsidy"],
    eligibility:["Citizen of a Stipendium Hungaricum partner country","Apply through your country's sending authority (e.g. Ministry of Education)","Good academic standing","Program must be at a Hungarian university","No existing Hungarian residency","Apply to programs taught in English or Hungarian"],
    docs:["Online application through home country authority","Passport copy","Last academic degree and transcripts","Recommendation letter (academic)","Motivation letter","Language proficiency evidence (IELTS/TOEFL or equivalent)","Medical certificate","CV / resume","Birth certificate","Photograph"],
    tip:"Applications go through your home country's Ministry of Education or relevant authority — you cannot apply directly. Contact your Ministry of Education early to find out their internal deadline, which is often weeks before the official one.",
    link:"https://stipendiumhungaricum.hu/apply/"
  },
  {
    id:16, name:"Aga Khan Foundation International Scholarship",
    host:"Various (UK, USA, Canada, France, Europe)",
    body:"Aga Khan Foundation",
    flag:"🌍", funding:"partial",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields (development-oriented programs prioritized)",
    deadline:"Applications open December, close March each year",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"Language requirement of the target university",
    open_to:"Developing countries with AKF presence",
    covered:["50% grant + 50% interest-free loan","Covers tuition, living expenses, books, travel","Loan to be repaid after graduation"],
    eligibility:["Outstanding academic record","Genuine financial need (means-tested)","From a developing country where AKF operates","Commitment to return and contribute to home country","Must already have admission to a leading university","Strong community involvement"],
    docs:["AKF application form","Passport copy","Bachelor's degree and transcripts","Admission letter from target university","Financial need documentation (family income statement)","Two recommendation letters","Personal essay on development goals","CV / resume","Bank statements of family","Evidence of community service"],
    tip:"The financial need assessment is very strict — document all family income sources honestly and thoroughly. AKF also strongly rewards community service. Applying with a clear development-oriented career plan massively improves success.",
    link:"https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme"
  },
  {
    id:17, name:"OIST Graduate University Fellowship (PhD)",
    host:"Japan", body:"Okinawa Institute of Science and Technology",
    flag:"🇯🇵", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Science and Technology",
    deadline:"Applications accepted year-round (rolling admissions)",
    gpa:"Strong research background (no fixed minimum CGPA)",
    age:"No age limit",
    language:"English (no Japanese required)",
    open_to:"All nationalities",
    covered:["Full tuition waiver","Monthly stipend ¥200,000 (~$1,370)","Research travel budget","Private furnished apartment","Health insurance","Relocation allowance"],
    eligibility:["Bachelor's or Master's degree in science/technology","Strong research potential and motivation","Submit research interests and contact OIST faculty","All courses and research done in English","No Japanese language required","Pass interview and admissions evaluation"],
    docs:["OIST online application","Passport copy","Bachelor's / Master's degree and transcripts","Three reference letters (from professors)","Research statement (2 pages)","CV / resume","English proficiency evidence (TOEFL/IELTS or prior English-medium education)","Sample of research work or publications (if any)","Statement of purpose","Photograph"],
    tip:"OIST is unique in Japan — everything is in English, no Japanese needed. The monthly stipend of ¥200,000 is one of the highest for PhD students in Asia. Contact OIST faculty directly with your research interests before applying.",
    link:"https://www.oist.jp/admissions"
  },
  {
    id:18, name:"ADB–Japan Scholarship Program",
    host:"Various (Asia-Pacific)",
    body:"Asian Development Bank / Japanese Government",
    flag:"🇯🇵", funding:"full",
    levels:["masters"],
    eligible_countries:"adb_member",
    exclusive_to:[],
    fields:"Economics, Management, Science, Technology, Development",
    deadline:"Varies by university — typically January – March",
    gpa:"Minimum bachelor's degree with superior academic record (no fixed minimum CGPA as requirements vary by the designated institution to which you are applying)",
    age:"Under 35 years",
    language:"IELTS or TOEFL required by participating university",
    open_to:"Citizens of ADB developing member countries",
    covered:["Full tuition fees at participating university","Monthly living allowance (country-specific)","Economy airfare (return)","Health and accident insurance","Limited financial assistance for family"],
    eligibility:["Citizen of ADB developing member country","Bachelor's degree or equivalent with superior grades","Minimum 2 years professional work experience","Accepted into a participating ADB-JSP university","Under 35 years of age","Return to home country after graduation (commitment required)"],
    docs:["ADB JSP application form","Passport copy","Bachelor's degree and transcripts","Acceptance letter from ADB-JSP university","Employer reference letter (work experience)","Two recommendation letters","Study plan and career goals statement","CV / resume","IELTS / TOEFL scores","Medical examination certificate"],
    tip:"You must first get accepted to one of the ADB-JSP partner universities (like AIT Thailand, IIM India, Peking University, etc.) and THEN apply for ADB scholarship through them. The scholarship is not separate from the university application.",
    link:"https://www.adb.org/work-with-us/careers/japan-scholarship-program"
  },
  {
    id:19, name:"Gates Cambridge Scholarship",
    host:"United Kingdom", body:"Gates Cambridge Trust (Bill & Melinda Gates Foundation)",
    flag:"🇬🇧", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"October for US applicants, December for all others",
    gpa:"Exceptional academic record (typically first class)",
    age:"No age limit",
    language:"Cambridge English requirement (IELTS 7.5 typically)",
    open_to:"All nationalities except UK citizens",
    covered:["Full cost of study at Cambridge","Maintenance allowance (~£21,000/year)","Return economy airfare","Family allowance (if applicable)","Discretionary funding for academic development"],
    eligibility:["Not a British citizen","Applying to full-time postgraduate degree at Cambridge","Outstanding intellectual ability","Leadership potential","Commitment to improving lives of others","Must secure Cambridge offer first (admission is separate)"],
    docs:["Cambridge University application (first)","Gates Cambridge scholarship application","Passport copy","Degree certificates and transcripts","Three academic reference letters","Research proposal (PhD)","Personal statement","CV / resume","IELTS / TOEFL scores","Evidence of leadership or community work"],
    tip:"The Gates Cambridge scholarship is one of the most competitive in the world. Your application must show outstanding research potential AND a clear commitment to making the world better. It is typically awarded to the top 1% of Cambridge applicants.",
    link:"https://www.gatescambridge.org/apply/"
  },
  {
    id:20, name:"Commonwealth Scholarship — Split-Site PhD",
    host:"United Kingdom", body:"Commonwealth Scholarship Commission",
    flag:"🇬🇧", funding:"full",
    levels:["phd"],
    eligible_countries:"commonwealth",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically October – December each year",
    gpa:"Enrolled in PhD at a Commonwealth university",
    age:"No age limit",
    language:"English proficiency — native or demonstrated",
    open_to:"Citizens of low and middle income Commonwealth countries",
    covered:["Return economy airfare to UK","Stipend for up to 12 months in UK","Accommodation allowance during UK stay","Research and study visit allowance"],
    eligibility:["Currently enrolled in PhD in home country","Citizen of a low or middle income Commonwealth country","Research requires 6–12 months at a UK university","UK supervisor has agreed to host","Academic nominator in home country","Thesis must benefit home country"],
    docs:["CSC online application","Passport copy","PhD registration proof from home university","Letter from UK university supervisor agreeing to host","Letter of support from home university supervisor","Research plan for UK visit","Academic transcripts","Two reference letters","Personal statement on development impact","CV / resume"],
    tip:"This is often overlooked — it lets you keep your current PhD in your country while spending time at a UK university for research. Much lower competition than a full PhD scholarship. Ideal if you are already enrolled in a PhD program.",
    link:"https://cscuk.fcdo.gov.uk/apply/"
  },
  {
    id:21, name:"Erasmus Mundus Joint Master Degrees",
    host:"Europe (multiple countries)", body:"European Commission",
    flag:"🇪🇺", funding:"full",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (program-specific)",
    deadline:"November – January depending on consortium",
    gpa:"Strong academic record, varies by consortium",
    age:"No age limit",
    language:"English (IELTS 6.5 minimum) for most programs",
    open_to:"All nationalities — non-EU students prioritized for scholarships",
    covered:["Full tuition fees","Monthly living allowance €1,400 (non-EU students)","Travel and installation allowance (~€2,000)","Study in 2–3 European countries","Double or joint degree from European universities"],
    eligibility:["Bachelor's degree in relevant field","Apply to a specific Erasmus Mundus Joint Master program","Non-EU students given scholarship priority","Must be willing to study in multiple EU countries","Strong motivation and academic record","Language requirements vary by program"],
    docs:["Online application to specific EMJM program","Passport copy","Bachelor's degree certificate and transcripts","Two or three recommendation letters","Motivation letter (program-specific)","CV / resume","IELTS / TOEFL scores","Statement of purpose","Portfolio (if design/arts program)","Any publications or research experience"],
    tip:"There are 200+ Erasmus Mundus programs — choose one in your exact field and apply to multiple programs at once. Apply for the Joint Degree scholarship within the same application form — there's no separate scholarship application.",
    link:"https://www.eacea.ec.europa.eu/scholarships/emjmd-catalogue_en"
  },
  {
    id:22, name:"Fulbright Foreign Language Teaching Assistant (FLTA)",
    host:"United States", body:"U.S. Department of State",
    flag:"🇺🇸", funding:"full",
    levels:["undergrad","masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Language Teaching, Education, Cross-cultural Exchange",
    deadline:"Varies by country — apply through US Embassy",
    gpa:"must be enrolled or recently graduated, No fixed minimum CGPA ",
    age:"No age limit",
    language:"English proficiency required (TOEFL 79+)",
    open_to:"All nationalities — apply through US Embassy in home country",
    covered:["Monthly stipend to cover living expenses","Round-trip economy airfare","Health insurance","Opportunity to audit university courses"],
    eligibility:["Native or near-native proficiency in home language","Strong English skills","Undergraduate degree or enrollment","Teaches your native language at a US university","Commitment to cultural exchange","Apply through US Embassy in home country"],
    docs:["FLTA online application (via US Embassy)","Passport copy","Academic transcripts","Two recommendation letters","Personal statement","English language proficiency evidence","CV / resume","Writing sample","Evidence of teaching or tutoring experience","Birth certificate"],
    tip:"This is a great option for recent graduates — you teach your language at a US university while taking free courses. Much less competitive than Fulbright master's/PhD programs.",
    link:"https://foreign.fulbrightonline.org/about/foreign-flta"
  },
  {
    id:23, name:"POSTECH International Student Scholarship",
    host:"South Korea", body:"Pohang University of Science and Technology (POSTECH)",
    flag:"🇰🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Science and Engineering",
    deadline:"Rolling admissions — Spring and Fall semesters",
    gpa:"Strong academic record in science/engineering (no fixed minimum CGPA)",
    age:"No age limit",
    language:"TOEFL iBT 80+ or IELTS 6.0; Korean optional",
    open_to:"All nationalities",
    covered:["Full tuition waiver","Monthly stipend ~KRW 700,000–1,000,000","Research funding","On-campus accommodation (priority)"],
    eligibility:["Bachelor's degree in science or engineering","Accepted by a POSTECH professor (required — you must contact first)","Strong academic and research record","English or Korean proficiency","Apply for Spring or Fall semester","Recommendation from a POSTECH faculty member"],
    docs:["POSTECH application form","Passport copy","Bachelor's degree and transcripts","Research plan / statement of purpose","Three reference letters (including POSTECH faculty)","TOEFL / IELTS scores","CV / resume","List of publications or research projects","Professor agreement letter","Photograph"],
    tip:"You MUST secure a POSTECH professor's agreement BEFORE applying — email professors in your field with your research proposal. Your application will not move forward without a professor who agrees to supervise you.",
    link:"https://admission.postech.ac.kr/international"
  },
  {
    id:24, name:"KAIST International Student Fellowship",
    host:"South Korea", body:"Korea Advanced Institute of Science and Technology",
    flag:"🇰🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Science, Technology, Engineering, Mathematics (STEM)",
    deadline:"Spring (September – October) and Fall (March – April) admissions",
    gpa:"Top academic performance in STEM (no fixed minimum CGPA)",
    age:"No age limit",
    language:"TOEFL iBT 83+ or IELTS 6.5",
    open_to:"All nationalities",
    covered:["Full tuition waiver","Monthly stipend KRW 900,000 (Master's) / KRW 1,200,000 (PhD)","Research allowance","On-campus housing available","Health insurance"],
    eligibility:["Bachelor's or Master's degree in STEM field","Exceptional academic and research background","TOEFL/IELTS proficiency","Acceptance into KAIST department","No Korean language requirement","Strong GRE scores (recommended)"],
    docs:["KAIST online application","Passport copy","Bachelor's / Master's degree and transcripts","Three letters of recommendation","Statement of purpose","Research plan","TOEFL / IELTS scores","CV / resume","GRE scores (recommended)","Sample of research work"],
    tip:"KAIST has multiple fellowship types — the department-funded fellowship through a professor's lab is often easier to get than the central scholarship. Email professors directly with your research interests and CV.",
    link:"https://apply.kaist.ac.kr/IndexPage"
  },
  {
    id:25, name:"Malaysian International Scholarship (MIS)",
    host:"Malaysia", body:"Ministry of Higher Education Malaysia",
    flag:"🇲🇾", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Science, Technology, Engineering, Medicine, Agriculture, Social Sciences",
    deadline:"Applications open March – May each year",
    gpa:"Minimum CGPA 3.5/4.0 or equivalent",
    age:"Under 40 for Master's, Under 45 for PhD",
    language:"IELTS 6.0 or TOEFL iBT 79",
    open_to:"International students from developing countries",
    covered:["Full tuition fees","Monthly stipend MYR 3,200 (~$700)","Accommodation allowance","Airfare (return economy)","Medical allowance","Thesis/dissertation fee"],
    eligibility:["From a developing country","Minimum CGPA 3.5 or equivalent","Apply to a Malaysian public university","Under age limit","IELTS/TOEFL requirement","Strong academic and professional background"],
    docs:["MIS online application","Passport copy","Bachelor's / Master's degree and transcripts","Two recommendation letters","Research proposal","Acceptance letter from Malaysian university","IELTS / TOEFL scores","Medical examination","CV / resume","Study plan"],
    tip:"Malaysia is often overlooked but offers strong STEM programs at universities like UM, UPM, and UTM — lower competition than UK or US scholarships with comparable living standards. Apply to the university and scholarship simultaneously.",
    link:"https://biasiswa.mohe.gov.my/INTER/"
  },
  {
    id:26, name:"PETRONAS Education Sponsorship (Undergraduate)",
    host:"Malaysia", body:"PETRONAS (Petroliam Nasional Berhad)",
    flag:"🇲🇾", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Engineering, Science, Technology, Business",
    deadline:"January – April each year",
    gpa:"Minimum 90% or equivalent in high school",
    age:"Under 20 years at start of program",
    language:"IELTS 6.0 or equivalent",
    open_to:"All nationalities for international UTP program",
    covered:["Full tuition at Universiti Teknologi PETRONAS (UTP)","Monthly allowance","Books and equipment","Accommodation on campus","Internship placement at PETRONAS"],
    eligibility:["Strong high school results (90%+ equivalent)","Interest in engineering or STEM fields","Under 20 years at program start","Strong English proficiency","Commitment to 4-year engineering program at UTP","IELTS 6.0 or equivalent"],
    docs:["PETRONAS online application","Passport copy","O-Level / A-Level / Matric results","School reference or recommendation letter","Personal statement","IELTS / equivalent English score","Medical examination","CV / activities record","Birth certificate","Photograph"],
    tip:"PETRONAS strongly values students with community leadership and co-curricular achievements alongside strong grades. Document every sport, club, or community role — pure grades alone won't differentiate you.",
    link:"https://www.utp.edu.my/Pages/admission/international-students-admissions.aspx"
  },
  {
    id:27, name:"Netherlands Fellowship Programmes (NFP)",
    host:"Netherlands", body:"Netherlands Ministry of Foreign Affairs / Nuffic",
    flag:"🇳🇱", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"nuffic_eligible",
    exclusive_to:[],
    fields:"Development-related Fields",
    deadline:"Applications typically open October, deadline February",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No fixed age limit",
    language:"IELTS 6.0 or TOEFL 80",
    open_to:"Citizens of NFP-eligible developing countries",
    covered:["Full tuition at Dutch institution","Monthly living allowance (~€1,140)","Accommodation allowance","Return economy airfare","Insurance","Visa costs"],
    eligibility:["Citizen of an NFP-eligible country (check Nuffic list)","Minimum 2 years work experience","Employed and nominated by employer","Applying to a Dutch higher education institution","Development-related field of study","Must return to home country after completion"],
    docs:["Orange Knowledge Programme application","Passport copy","Bachelor's degree and transcripts","Employer nomination letter","Two recommendation letters","CV / resume","Study motivation letter","IELTS / TOEFL scores","Acceptance from Dutch institution","Work experience certificates"],
    tip:"The employer nomination is mandatory — you cannot apply without your employer supporting you. Government employees, NGO workers, and university staff have the highest success rates for this scholarship.",
    link:"https://www.studyinholland.nl/scholarships/highlighted-scholarships/holland-scholarship"
  },
  {
    id:28, name:"NUFFIC Orange Knowledge Programme",
    host:"Netherlands", body:"Nuffic / Dutch Government",
    flag:"🇳🇱", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Water Management, Agriculture, Food Security, Public Health, Security and Rule of Law",
    deadline:"Varies by institution — typically February",
    gpa:"Relevant professional experience valued over GPA (no fixed minimum CGPA)",
    age:"No age limit",
    language:"IELTS 6.0 or equivalent",
    open_to:"Citizens of eligible developing countries with work experience",
    covered:["Full tuition","Living allowance","Accommodation","Return airfare","Health insurance","Visa fees"],
    eligibility:["Professional working in eligible sector","Employer must support and nominate you","Citizen of eligible country","IELTS 6.0 minimum","Studying in a Dutch institution","Return to home country after program"],
    docs:["OKP application form","Passport copy","Degree and transcripts","Employer nomination and support letter","CV / resume","Motivation letter","IELTS scores","Acceptance from Dutch university","Work experience certificates","References from employer"],
    tip:"This programme targets professionals, not just fresh graduates. Focus on how your studies will directly improve systems in your home country — the impact statement is weighted heavily in selection.",
    link:"https://www.nuffic.nl/en/subjects/orange-knowledge-programme"
  },
  {
    id:29, name:"USAID Scholarship (Pakistan — Merit and Needs Based)",
    host:"United States", body:"USAID / US Embassy Pakistan",
    flag:"🇺🇸", funding:"full",
    levels:["undergrad"],
    eligible_countries:"pakistan_only",
    exclusive_to:["pakistan"],
    fields:"All Fields (STEM prioritized)",
    deadline:"Varies — check USEFP website",
    gpa:"Top academic record of A-Level or FSc equivalent (no fixed minimum CGPA)",
    age:"Under 22 years for undergrad",
    language:"IELTS 7.0+ / SAT 1200+",
    open_to:"Pakistani students only",
    covered:["Full tuition at US university","Living expenses in USA","Health insurance","Airfare (return)","Books and materials"],
    eligibility:["Pakistani national","Exceptional academic record — top student","Financial need (means-tested for needs-based)","IELTS 7.0 or equivalent SAT score","Strong extracurricular and leadership record","Under 22 years of age"],
    docs:["USEFP application form","Passport copy","Matric and FSc certificates and marksheets","SAT / IELTS scores","Three recommendation letters","Personal essay","Financial documents (family income)","Extracurricular activities record","CV","Medical examination certificate"],
    tip:"Apply through USEFP (usefpakistan.org) not directly to USAID. The USEFP administers all scholarship programs for Pakistan. Deadlines are strict — missing by even one day disqualifies you.",
    link:"https://www.usefpakistan.org/"
  },
  {
    id:30, name:"Romanian Government Scholarship",
    host:"Romania", body:"Romanian Ministry of Education",
    flag:"🇷🇴", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically February – March each year",
    gpa:"good academic record (no fixed minimum gpa)",
    age:"No age limit",
    language:"Romanian (free preparatory year included) or English",
    open_to:"Citizens of developing countries with Romanian diplomatic relations",
    covered:["Full tuition waiver","Monthly stipend €65","Free dormitory accommodation","Free Romanian language preparatory year","Medical insurance"],
    eligibility:["Citizen of developing country","Apply through Romanian Embassy in home country","Good academic record","No prior Romanian citizenship","Willingness to learn Romanian (preparatory year offered)","Under 35 years (some programs)"],
    docs:["Romanian Embassy application form","Passport copy","Last degree certificate and transcripts","Birth certificate","Medical certificate","Two passport photographs","Bank statement or financial declaration","Motivation letter","CV / resume","Police clearance certificate"],
    tip:"Romania is underrated — the cost of living is among Europe's lowest, and many programs are English-taught. Apply through your local Romanian Embassy early since they have country-specific quotas.",
    link:"https://www.mae.ro/en/node/10451"
  },
  {
    id:31, name:"Taiwan Government Scholarship (MOFA)",
    host:"Taiwan", body:"Ministry of Foreign Affairs, Taiwan (R.O.C.)",
    flag:"🇹🇼", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically February – March each year (apply through Taiwan embassy/office)",
    gpa:"Minimum 80% or B+ grade in last degree",
    age:"Under 40 years",
    language:"Chinese (Mandarin) or English depending on program",
    open_to:"All nationalities (excluding countries without diplomatic ties)",
    covered:["Full tuition waiver","Monthly stipend NTD 20,000–25,000 (~$620–$780)","Accommodation subsidy (not housing itself)","Chinese language training year (optional)"],
    eligibility:["Citizen of a country with official/unofficial ties to Taiwan","Minimum 80% or equivalent in last degree","Under 40 years","Not currently studying in Taiwan","Good health","Apply through TECO (Taipei Economic and Cultural Office) in home country"],
    docs:["MOFA online scholarship application","Passport copy","Last degree certificate and transcripts","Two recommendation letters","Study plan / research proposal","Medical examination certificate","Language proficiency evidence (Chinese or English)","CV / resume","Photograph","Police clearance"],
    tip:"Taiwan is an excellent tech hub with world-class universities like NTHU, NCTU, and NTU. The scholarship amount is competitive and cost of living is moderate. Apply through your nearest TECO office.",
    link:"https://www.mofa.gov.tw/en/SubNews_Content.aspx?n=2208&s=57880"
  },
  {
    id:32, name:"University of Tokyo PEAK Program (Undergraduate)",
    host:"Japan", body:"University of Tokyo",
    flag:"🇯🇵", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Environmental Studies, International Studies",
    deadline:"Typically October – November for following year entry",
    gpa:"Top academic record (equivalent to Japanese university entrance)",
    age:"Under 20 years typically",
    language:"English (fully English-taught program; no Japanese required)",
    open_to:"All nationalities",
    covered:["MEXT scholarship eligible (reduces tuition)","Various university-level financial aid","Accommodation assistance","Research opportunities"],
    eligibility:["Exceptional high school academic record","English proficiency (IELTS 7.0+ / TOEFL 100+)","Pass PEAK entrance examination and interview","Under 20 years","Applying to Environmental Studies or Frontiers of Science","Submit academic essays and take entrance exam"],
    docs:["UTokyo PEAK application form","Passport copy","High school certificates and transcripts","School recommendation letter","Two academic essays (PEAK prompts)","IELTS / TOEFL scores","Photograph","Application fee payment","Medical certificate","Language of instruction evidence"],
    tip:"PEAK is taught entirely in English at Japan's most prestigious university. Competition is global but lower than US Ivy League equivalents. Strong essay writing and intellectual curiosity are the deciding factors.",
    link:"https://www.u-tokyo.ac.jp/en/admissions/undergraduate/e101_04.html"
  },
  {
    id:33, name:"POSCO TJ Park Foundation Scholarship (Asia)",
    host:"South Korea", body:"POSCO TJ Park Foundation",
    flag:"🇰🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"asian_developing",
    exclusive_to:[],
    fields:"Science, Technology, Engineering (STEM focus)",
    deadline:"Typically February – March each year",
    gpa:"Minimum 3.0/4.5 GPA equivalent",
    age:"Under 35 years",
    language:"Korean or English proficiency required",
    open_to:"Developing Asian countries (including Pakistan, Bangladesh, India, Nepal, etc.)",
    covered:["Full tuition at Korean university","Monthly stipend KRW 1,000,000","Research allowance","Settlement support","Round-trip airfare"],
    eligibility:["From Asian developing country","STEM field focus","Accepted by Korean university supervisor","Under 35 years","Strong academic record","Apply while being accepted by Korean university"],
    docs:["POSCO Foundation application","Passport copy","Degree and transcripts","Supervisor agreement from Korean professor","Two recommendation letters","Research proposal","CV / resume","Language proficiency certificate","Study plan","Photograph"],
    tip:"Lesser-known than GKS but very generous — and less competitive. Secure a Korean professor's lab offer first, then apply for this scholarship through the university.",
    link:"https://www.postf.org/eng/scholarship/asia.asp"
  },
  {
    id:34, name:"Swiss Government Excellence Scholarship",
    host:"Switzerland", body:"State Secretariat for Education, Research and Innovation (SERI)",
    flag:"🇨🇭", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (research-focused)",
    deadline:"Typically November – December each year (apply via Swiss embassy)",
    gpa:"Exceptional academic record (no fixed minimum CGPA)",
    age:"Under 35 for PhD/Postdoc; under 30 for Art Excellence",
    language:"French, German, Italian, or English depending on university",
    open_to:"All nationalities (apply through Swiss Embassy in home country)",
    covered:["Monthly stipend CHF 1,920–1,985 (~$2,200)","Housing allowance CHF 300/month","Health insurance covered","Airfare reimbursement","Tuition fees covered by host institution"],
    eligibility:["Outstanding academic record","Contact Swiss host institution / professor before applying","Apply through Swiss Embassy in home country","Research or arts excellence focus","Under age limit","Must have completed relevant prior degree"],
    docs:["Swiss Embassy application form","Passport copy","Degree certificates and transcripts","Acceptance/support letter from Swiss professor or institution","Research proposal (2–3 pages)","Two academic reference letters","CV / resume","Language proficiency evidence","Portfolio (arts applicants)","Publication list (if applicable)"],
    tip:"Secure a Swiss professor's support letter BEFORE applying through the Embassy — without this your application is almost certainly rejected. Email Swiss professors in your field months before the deadline.",
    link:"https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html"
  },
  {
    id:35, name:"Brunei Darussalam Government Scholarship",
    host:"Brunei", body:"Government of Brunei Darussalam",
    flag:"🇧🇳", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"asean_and_selected",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically February – April each year",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Under 25 (undergrad), Under 35 (graduate)",
    language:"English proficiency required",
    open_to:"Selected countries — apply through Brunei Embassy",
    covered:["Full tuition at Brunei universities","Monthly allowance BND 400–600","Accommodation provided","Return airfare","Medical insurance"],
    eligibility:["Citizen of eligible country","Good academic record","Apply through Brunei Embassy in home country","English proficiency","Under age limit","Good health and character"],
    docs:["Brunei Embassy application form","Passport copy","Degree / school certificates and transcripts","Recommendation letters","Personal statement","Medical certificate","Police clearance","CV / resume","Photograph","Bank statement"],
    tip:"Brunei is often overlooked — cost of living is covered, universities use English, and acceptance rates are higher than major scholarships. A great option for students from ASEAN and South Asian countries.",
    link:"https://www.mfa.gov.bn/Pages/Scholarships.aspx"
  },
  {
    id:36, name:"Australian Awards Scholarship",
    host:"Australia", body:"Australian Government (DFAT)",
    flag:"🇦🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"selected_developing",
    exclusive_to:[],
    fields:"Development-related fields aligned with Australian aid priorities",
    deadline:"Varies by country — typically April – June",
    gpa:"2.5 to 3.0 on a 4.0 scale",
    age:"No age limit (minimum 18)",
    language:"IELTS 6.5 overall (no band below 6.0)",
    open_to:"Citizens of eligible developing countries",
    covered:["Full tuition fees at Australian university","Living allowance (~AUD 35,000/year)","Establishment allowance","Return economy airfare","Overseas student health cover (OSHC)","Introductory academic program"],
    eligibility:["Citizen of an Australian Awards-eligible country","Minimum 18 years, not currently in Australia on other visa","Strong academic and work experience record","Commitment to return home and apply learning","IELTS 6.5 minimum","Apply through Australian Embassy in home country"],
    docs:["Australian Awards online application","Passport copy","Degree certificates and transcripts","Two reference letters (academic and professional)","Personal statement on development impact","CV / resume","IELTS scores","Employment evidence","Medical examination certificate","Police clearance certificate"],
    tip:"Australian Awards are very development-focused. Your personal statement must show clearly how your degree helps your home country's development — vague personal goals are penalized. Apply through OASIS (Australian Government's scholarship portal).",
    link:"https://www.australianawards.gov.au/"
  },
  {
    id:37, name:"New Zealand Commonwealth Scholarship",
    host:"New Zealand", body:"New Zealand Ministry of Foreign Affairs and Trade",
    flag:"🇳🇿", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"commonwealth",
    exclusive_to:[],
    fields:"Development-related fields",
    deadline:"Typically March – May each year",
    gpa:"minimum GPA of 3.0 out of 4.0",
    age:"No age limit",
    language:"IELTS 6.5 or TOEFL 90",
    open_to:"Citizens of Commonwealth developing countries",
    covered:["Full tuition fees","Return economy airfare","Monthly living allowance","Establishment grant","Health insurance","Field research allowance (PhD)"],
    eligibility:["Citizen of Commonwealth developing country","Apply to a New Zealand university","Strong academic and professional background","Development-oriented study plan","IELTS/TOEFL requirement","Commitment to return and apply learning at home"],
    docs:["NZ scholarship application form","Passport copy","Degree and transcripts","Two academic/professional references","Research proposal (PhD)","Statement on development goals","CV / resume","IELTS / TOEFL scores","University acceptance letter","Medical certificate"],
    tip:"New Zealand is known for high quality of life, safe environment, and English-language education. Less well-known than Australia or UK scholarships — lower competition. Apply through the NZ Aid Programme.",
    link:"https://www.mfat.govt.nz/en/aid-and-development/nz-aid-programme/nz-scholarships/"
  },
  {
    id:38, name:"Eiffel Excellence Scholarship (France)",
    host:"France", body:"Campus France / French Ministry of Europe and Foreign Affairs",
    flag:"🇫🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Law, Economics, Management, Engineering, Science, Political Science",
    deadline:"Applications through French institutions — typically January",
    gpa:" minimum GPA of 3.0 out of 4.0 or an equivalent B+ average (highly competitive programs may require higher grades)",
    age:"Under 30 for Master's, Under 35 for PhD",
    language:"French or English depending on program",
    open_to:"All nationalities (non-EU students)",
    covered:["Monthly allowance €1,181 (Master's) / €1,400 (PhD)","Round-trip airfare","Health insurance","Cultural events and activities program"],
    eligibility:["Non-EU / non-French citizen","Under age limit","Outstanding academic record (top 10–15% of class)","Nominated by a French higher education institution (not self-apply)","Relevant field of study","Already in contact with or applying to French university"],
    docs:["Application submitted BY French institution (not student directly)","Passport copy","Degree and transcripts","Two academic recommendation letters","Research proposal","CV / resume","Language proficiency","Portfolio if relevant","Publications if available","Letter of motivation"],
    tip:"You CANNOT apply directly — a French university must nominate you. Contact your target French university first, get accepted, and then ask them to nominate you for Eiffel. The French institution submits the actual application.",
    link:"https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence"
  },
  {
    id:39, name:"VLIR-UOS Scholarship (Belgium)",
    host:"Belgium", body:"Flemish Interuniversity Council (VLIR-UOS)",
    flag:"🇧🇪", funding:"full",
    levels:["masters"],
    eligible_countries:"vlir_eligible",
    exclusive_to:[],
    fields:"Development-related Fields",
    deadline:"Applications typically open October, close February",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Under 40 years",
    language:"English (IELTS 6.5 or equivalent)",
    open_to:"Citizens of 31 eligible countries (Africa, Asia, Latin America)",
    covered:["Full tuition at Belgian university","Monthly living allowance €800","Round-trip airfare","Health insurance","Residence permit costs"],
    eligibility:["Citizen of VLIR-UOS eligible country (check list)","Bachelor's degree in relevant field","Under 40 years","English proficiency IELTS 6.5+","Applying to a VLIR-UOS listed master's program","Strong academic and professional background"],
    docs:["VLIR-UOS online application","Passport copy","Bachelor's degree and transcripts","Two recommendation letters","Motivation letter","CV / resume","IELTS scores","Evidence of work experience","Medical certificate","Police clearance"],
    tip:"Belgium offers high-quality education at relatively low international fees. VLIR-UOS has a specific list of programs you can apply to — choose from the VLIR list only, not any Belgian university program.",
    link:"https://www.vliruos.be/en/scholarships"
  },
  {
    id:40, name:"Orange Tulip Scholarship (Netherlands — for India, Indonesia, China, etc.)",
    host:"Netherlands", body:"Nuffic / Dutch institutions",
    flag:"🇳🇱", funding:"partial",
    levels:["undergrad","masters"],
    eligible_countries:"ots_eligible",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February – April each year",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No age limit",
    language:"IELTS 6.0 / TOEFL 80",
    open_to:"Citizens of eligible countries (Indonesia, India, China, Mexico, Thailand, Vietnam, etc.)",
    covered:["Tuition fee discount 50–100% (varies by institution)","Some institutions offer full coverage","Application through specific Dutch institutions"],
    eligibility:["Citizen of OTS-eligible country","Accepted by a participating Dutch institution","Strong academic record","Applying to a Dutch bachelor's or master's program","Language proficiency","Must not already be resident in Netherlands"],
    docs:["Dutch university application (first)","Passport copy","Academic certificates and transcripts","Recommendation letters","Motivation letter","IELTS / TOEFL scores","CV / resume","Portfolio (if applicable)","Proof of funding (if partial scholarship)","Photograph"],
    tip:"Apply to the Dutch university directly first, get accepted, and then the university nominates you for Orange Tulip. Each university has its own deadline and benefits — check your target university's specific OTS offer.",
    link:"https://www.studyinholland.nl/scholarships"
  },
  {
    id:41, name:"Schwarzman Scholars (China — Tsinghua)",
    host:"China", body:"Schwarzman College, Tsinghua University",
    flag:"🇨🇳", funding:"full",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Public Policy, International Relations, Economics, Business, STEM",
    deadline:"Applications typically open June, close September each year",
    gpa:"Strong undergraduate GPA (no fixed minimum CGPA, but most successful applicants have a GPA of 3.8)",
    age:"21 – 45 years",
    language:"English (IELTS 7.0 / TOEFL 100); no Chinese required",
    open_to:"All nationalities",
    covered:["Full tuition at Tsinghua University","Room and board on campus","Travel stipend","In-country study trips across China","Mentorship and networking events","Books and supplies"],
    eligibility:["Bachelor's degree with strong academic record","21–45 years of age","Leadership potential and global awareness","English proficiency","Commitment to global leadership development","Strong extra-curricular record"],
    docs:["Schwarzman online application","Passport copy","Bachelor's degree and transcripts","Two short essays","Video profile submission","Three recommendation letters","CV / resume","IELTS / TOEFL scores","List of leadership roles and achievements","Optional: GRE/GMAT"],
    tip:"Schwarzman is built for future global leaders. Your application must show exceptional leadership, cross-cultural curiosity, and clear ambition — it is not just academic. Semi-finalists have interviews, which carry significant weight.",
    link:"https://www.schwarzmanscholars.org/apply/"
  },
  {
    id:42, name:"Rotary Peace Fellowship",
    host:"Various (USA, UK, Japan, Sweden, Australia, Uganda, Thailand)",
    body:"Rotary Foundation",
    flag:"🌍", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Peace Studies, International Relations, Conflict Resolution, Development, Public Health",
    deadline:"Applications open June, close November each year",
    gpa:"Strong academic record in peace-related field (no fixed minimum CGPA)",
    age:"No age limit",
    language:"English (and language of host country for immersion)",
    open_to:"All nationalities (Rotary peace center programs worldwide)",
    covered:["Full tuition at Rotary Peace Center university","Round-trip economy airfare","Living stipend","Book and educational supplies","Internship costs","Language immersion program"],
    eligibility:["Strong academic record","Minimum 3 years of professional work experience related to peace/development","Fluent in English and another language","Apply through local Rotary district","Strong commitment to peace and development","Not a current Rotary member or employee"],
    docs:["Rotary Foundation online application","Passport copy","Degree certificates and transcripts","Four essays (Rotary-specific questions)","Two professional references and one personal reference","CV / resume","Language proficiency evidence","Work experience certificates","Community or peace work evidence","District and zone endorsement"],
    tip:"Apply through your local Rotary club — you need district endorsement to proceed. The essays must show genuine commitment to peace, not just academic interest. Real field experience in conflict zones, NGOs, or peacebuilding is a major advantage.",
    link:"https://www.rotary.org/en/our-programs/peace-fellowships"
  },
  {
    id:43, name:"Frank Knox Fellowship (Harvard)",
    host:"United States", body:"Harvard University / Frank Knox Memorial Fund",
    flag:"🇺🇸", funding:"full",
    levels:["masters"],
    eligible_countries:"commonwealth",
    exclusive_to:[],
    fields:"All Fields offered at Harvard graduate schools",
    deadline:"Typically October – November each year",
    gpa:"Exceptional academic record (3.5 GPA or above)",
    age:"No age limit",
    language:"IELTS 7.0 or TOEFL 100",
    open_to:"Citizens of Commonwealth countries",
    covered:["Full tuition at Harvard graduate school","Monthly living stipend","Health insurance","Travel allowance","Housing assistance"],
    eligibility:["Citizen of a Commonwealth country","Exceptional academic achievement","Apply to a Harvard graduate school first","Leadership and extra-curricular distinction","IELTS/TOEFL requirement","Awarded on Harvard admission — not separate"],
    docs:["Harvard graduate school application (main)","Knox Fellowship nomination (if required by school)","Passport copy","Degree and transcripts","Three academic references","Statement of purpose","CV / resume","IELTS / TOEFL scores","Research proposal (if applicable)","Writing sample"],
    tip:"You apply to Harvard first — the Knox Fellowship is often awarded during the admissions process, not separately. Being from a Commonwealth country and applying to Harvard gives you automatic consideration for Knox funding.",
    link:"https://frankknox.harvard.edu/"
  },
  {
    id:44, name:"Japanese JICA Development Studies Scholarship",
    host:"Japan", body:"Japan International Cooperation Agency (JICA)",
    flag:"🇯🇵", funding:"full",
    levels:["masters"],
    eligible_countries:"jica_partner",
    exclusive_to:[],
    fields:"Development Studies, Public Administration, Infrastructure, Agriculture, Health",
    deadline:"Varies by partner organization and country",
    gpa:"minimum CGPA of 2.5 on a 4.0 scale",
    age:"Under 39 years",
    language:"Japanese or English depending on program",
    open_to:"Citizens of JICA partner developing countries",
    covered:["Full tuition at Japanese university","Monthly allowance ¥170,000","Accommodation subsidy","Round-trip airfare","Research materials allowance","Health insurance"],
    eligibility:["Working professional in government or public sector","Citizen of JICA partner country","Under 39 years","Nominated by home country government or JICA","Strong work experience in development sector","Commitment to return and apply skills"],
    docs:["JICA application form (via home government)","Passport copy","Degree and transcripts","Employment certificate","Supervisor recommendation","Government nomination letter","Personal essay on development goals","CV / resume","IELTS / TOEFL scores (if English-taught)","Medical certificate"],
    tip:"JICA targets professionals already working in government or development organizations. If you are a private sector employee, your chances are much lower. Apply through your country's JICA office, not independently.",
    link:"https://www.jica.go.jp/english/our_work/human_security/partnership/training/accept.html"
  },
  {
    id:45, name:"Korea Foundation for Advanced Studies (KFAS) Scholarship",
    host:"South Korea", body:"Korea Foundation for Advanced Studies",
    flag:"🇰🇷", funding:"full",
    levels:["phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Science, Technology, Engineering, Social Sciences",
    deadline:"Typically February – April each year",
    gpa:"Minimum 3.0 GPA equivalent (top 30% of class)",
    age:"Under 35 years",
    language:"TOEFL 80+ or IELTS 6.5",
    open_to:"All developing countries (not from high-income OECD countries)",
    covered:["Full tuition at Korean university","Monthly stipend KRW 1,000,000","Research expense support","Accommodation support","Round-trip airfare","Health insurance"],
    eligibility:["From a developing country","Top 30% of academic class","PhD applicants only","Secured Korean university supervisor","Under 35 years","Strong research background and publications"],
    docs:["KFAS application form","Passport copy","Bachelor's and Master's degrees with transcripts","Three recommendation letters","Research proposal","Korean university supervisor's acceptance letter","CV / resume with publications","TOEFL / IELTS scores","Study plan","Medical certificate"],
    tip:"Like most Korean scholarships, securing a professor who agrees to supervise you is the essential first step. Email Korean professors with your research paper or proposal — a good response means your scholarship application has a strong foundation.",
    link:"https://www.kfas.or.kr/CmsHome/MainDefault.aspx"
  }
 
  ,
  {
    id:46, name:"Knight-Hennessy Scholars (Stanford)",
    host:"United States", body:"Stanford University",
    flag:"🇺🇸", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Mid-October (Stanford deadline)",
    gpa:"Exceptional academic record (no fixed minimum CGPA)",
    age:"Graduated after 2018 (for 2026 cycle)",
    language:"English (TOEFL/IELTS for non-native speakers)",
    open_to:"All nationalities applying to Stanford graduate programs",
    covered:["Full tuition at Stanford","Monthly living stipend","Travel expenses","Leadership programming and mentorship"],
    eligibility:["Any nationality","Applying to a Stanford graduate program simultaneously","Graduated from bachelor's after 2018 (for 2026 cycle)","Demonstrated leadership potential","Strong community impact"],
    docs:["Stanford graduate program application","Knight-Hennessy supplemental application","Transcripts","Three letters of recommendation","Personal statement","CV / resume","English proficiency scores (if required)"],
    tip:"You must apply to a Stanford graduate program at the same time. The scholarship is layered on top — focus your KH essays on leadership impact stories, not just academics. One of the most competitive scholarships globally.",
    link:"https://knight-hennessy.stanford.edu"
  },
  {
    id:47, name:"Hubert H. Humphrey Fellowship (USA)",
    host:"United States", body:"U.S. Department of State / Fulbright",
    flag:"🇺🇸", funding:"full",
    levels:["professional"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Public Policy, Education, Law, Public Health, Economics, Agriculture, Communications",
    deadline:"Varies by country — typically May–September",
    gpa:"Bachelor's degree required (no fixed minimum CGPA)",
    age:"No strict age limit — mid-career professionals",
    language:"TOEFL iBT 79 / IELTS 6.5 recommended",
    open_to:"Mid-career professionals from eligible developing countries",
    covered:["Full tuition and program fees","Monthly living stipend","Round-trip international travel","Health insurance","Professional development funds"],
    eligibility:["Minimum 5 years full-time professional work experience","Bachelor's degree required","Limited prior experience in the United States","Specific development-related field","Citizen of an eligible country"],
    docs:["Online Humphrey application","Passport copy","Bachelor's degree and transcripts","Three professional recommendation letters","CV / resume","Personal and professional goals statement","TOEFL/IELTS scores","Proof of work experience (employment letters)"],
    tip:"This is a 10-month non-degree professional fellowship — not a degree program. It suits experienced professionals who want US university exposure + professional development. Apply through US Embassy or Fulbright Commission in Pakistan.",
    link:"https://www.humphreyfellowship.org"
  },
  {
    id:48, name:"AAUW International Fellowships (USA)",
    host:"United States", body:"American Association of University Women",
    flag:"🇺🇸", funding:"full",
    levels:["masters","phd","postdoc"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"November 1",
    gpa:"3.5 on a 4.0 scale",
    age:"No strict age limit",
    language:"TOEFL/IELTS required",
    open_to:"Women who are non-US citizens pursuing full-time graduate or postdoctoral study in USA",
    covered:["$18,000–$30,000 per year stipend","Research and study expenses"],
    eligibility:["Women only","Non-US citizen at time of application","Holds a bachelor's degree","Committed to women's empowerment","Applying to a US university","TOEFL/IELTS required"],
    docs:["AAUW online application","Passport copy","Bachelor's degree certificate and transcripts","Three letters of recommendation","Statement of purpose","TOEFL/IELTS scores","CV / resume","Proof of admission to US university (or pending)"],
    tip:"Emphasize your commitment to women's empowerment and community leadership in your application. This fellowship strongly favors applicants who demonstrate clear intent to return and uplift women in their home country.",
    link:"https://www.aauw.org/resources/programs/fellowships"
  },
  {
    id:49, name:"Yale University Graduate Scholarships",
    host:"United States", body:"Yale University",
    flag:"🇺🇸", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (varies by department)",
    deadline:"December–January (varies by school/program)",
    gpa:" atleast 3.0 on a 4.0 scale",
    age:"No strict age limit",
    language:"TOEFL iBT 100 / IELTS 7.0 typical",
    open_to:"All nationalities applying to Yale graduate programs",
    covered:["Full tuition for most PhD programs","Monthly stipend (PhD)","Partial or merit scholarships for Masters","Research support"],
    eligibility:["Admission to Yale graduate program","PhD students typically fully funded via fellowships or RA/TA","Strong academics and research potential","All nationalities eligible"],
    docs:["Yale graduate program application","Transcripts","Three letters of recommendation","Statement of purpose / personal statement","CV / resume","TOEFL/IELTS scores","GRE (some programs)","Writing samples (some programs)"],
    tip:"PhD students at Yale are almost always fully funded. For Masters programs, funding is selective. Yale School of Management and Law School have separate need-based aid programs. Contact your department of interest directly for funding details.",
    link:"https://gsas.yale.edu"
  },
  {
    id:50, name:"Harvard University Need-Based Grants",
    host:"United States", body:"Harvard University",
    flag:"🇺🇸", funding:"need",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January 1 (regular decision)",
    gpa:"(no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"TOEFL/IELTS (check per program)",
    open_to:"All nationalities admitted to Harvard",
    covered:["Tuition based on family income","Room and board (income-based)","Families earning under $85K/yr pay nothing","100% of demonstrated need met"],
    eligibility:["Admission to Harvard","Demonstrated financial need","All nationalities","No minimum income threshold to apply for aid"],
    docs:["Harvard application","CSS Profile / IDOC (for aid)","Family financial documents","Transcripts","Letters of recommendation","SAT/ACT or TOEFL/IELTS","Essays"],
    tip:"Harvard pledges to meet 100% of demonstrated financial need for ALL admitted students — including international ones. If you can get in, Harvard will make it affordable. Focus your energy on the application quality, not fear of cost.",
    link:"https://college.harvard.edu/financial-aid"
  },
  {
    id:51, name:"MIT Financial Aid (International Students)",
    host:"United States", body:"Massachusetts Institute of Technology",
    flag:"🇺🇸", funding:"need",
    levels:["undergrad","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (STEM dominant)",
    deadline:"January 1 (Early November for Early Action)",
    gpa:"Exceptional academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"TOEFL/IELTS",
    open_to:"All nationalities admitted to MIT",
    covered:["UG: need-based grants averaging ~$50,000/yr","PhD: full tuition + ~$38,000/yr stipend via RA/TA","No loans in aid package"],
    eligibility:["Admission to MIT","Financial need (for UG)","PhD students funded via RA/TA regardless of nationality","All nationalities eligible"],
    docs:["MIT application","CSS Profile / IDOC (for UG aid)","Family financial documents","Transcripts","Recommendation letters","SAT/ACT scores","Essays"],
    tip:"MIT guarantees to meet 100% of demonstrated financial need for international undergrads — no loans. For PhD, funding comes through research or teaching assistantships automatically. Getting in is the challenge; the money follows.",
    link:"https://sfs.mit.edu"
  },
  {
    id:52, name:"Princeton University No-Loan Financial Aid",
    host:"United States", body:"Princeton University",
    flag:"🇺🇸", funding:"need",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January 1 (regular); November 1 (Early Action)",
    gpa:"Exceptional academic record (no fixed minimum CGPA)",
    age:"Undergrad applicants",
    language:"TOEFL/IELTS",
    open_to:"All nationalities admitted to Princeton",
    covered:["Grants replace loans entirely","Average grant covers 100% of demonstrated need","Tuition, room, and board included"],
    eligibility:["Admission to Princeton","Demonstrated financial need","All nationalities eligible for full aid","No loans in financial aid packages"],
    docs:["Princeton application","CSS Profile","IDOC for international financial documents","Transcripts","Recommendation letters","SAT/ACT","TOEFL/IELTS (if applicable)","Essays"],
    tip:"Princeton eliminates loans entirely — all aid is given as grants. International students are fully eligible. Princeton is also one of the most generous schools for low-income families. Apply Early Action to increase your chances.",
    link:"https://financialaid.princeton.edu"
  },
  {
    id:53, name:"Dartmouth College International Scholarships",
    host:"United States", body:"Dartmouth College",
    flag:"🇺🇸", funding:"need",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January 2 (Regular Decision); November 1 (Early Decision)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Undergrad applicants",
    language:"TOEFL/IELTS",
    open_to:"All nationalities admitted to Dartmouth",
    covered:["Meets 100% of demonstrated financial need","Grants only — no loans for most students","Tuition, room, and board covered"],
    eligibility:["Admission to Dartmouth","Demonstrated financial need","All nationalities","Strong academic and extracurricular profile"],
    docs:["Dartmouth application","CSS Profile / IDOC","Transcripts","Recommendation letters","SAT/ACT","TOEFL/IELTS","Essays"],
    tip:"Dartmouth eliminated loans from financial aid packages for qualifying students. International students are fully eligible for need-based grants. A less talked-about Ivy with strong need-based aid for international applicants.",
    link:"https://dartmouth.edu/admissions/financial-aid"
  },
  {
    id:54, name:"American University Emerging Global Leader Scholarship",
    host:"United States", body:"American University Washington DC",
    flag:"🇺🇸", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"December 1",
    gpa:"minimum 3.8 GPA on a 4.0 scale (or be in the top 10% of their graduating class)",
    age:"Undergraduate applicants",
    language:"TOEFL/IELTS required",
    open_to:"International students from developing countries with financial need",
    covered:["Full tuition","Room and board","Fees — covers all costs for 4 years"],
    eligibility:["International student from a developing country","Demonstrated financial need","First-generation college student preferred","Strong academic record","Community leadership and service","Commitment to return and contribute to home country"],
    docs:["AU application","Financial need documentation","Transcripts","Two letters of recommendation","TOEFL/IELTS scores","Personal statement","Leadership/community service evidence"],
    tip:"Only about 1 scholarship is awarded per year — extremely competitive. This is for exceptional students with genuine financial need and demonstrated leadership. Your story of overcoming challenges and commitment to your community must be compelling.",
    link:"https://www.american.edu/admissions/aid/international"
  },
  {
    id:55, name:"Berea College No-Tuition Promise",
    host:"United States", body:"Berea College",
    flag:"🇺🇸", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Rolling — November through February recommended",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Undergraduate applicants",
    language:"TOEFL/IELTS required",
    open_to:"All students with demonstrated financial need (including international)",
    covered:["Full tuition scholarship for ALL admitted students","Room and board is approximately $8,000/yr remaining"],
    eligibility:["Demonstrated financial need","Strong academic potential","All admitted students work 10 hours/week on campus (paid)","Limited international spots","Commitment to community and service values"],
    docs:["Berea application","Financial need documentation","Transcripts","Two recommendation letters","TOEFL/IELTS scores","Essays","Proof of financial need"],
    tip:"Every single student admitted to Berea College receives a full tuition scholarship — automatically. You pay nothing for tuition. Founded on work ethic and service values: you'll work on campus 10 hrs/week as part of the program. International spots are limited so apply early.",
    link:"https://www.berea.edu/admissions"
  },
  {
    id:56, name:"Columbia University International Financial Aid",
    host:"United States", body:"Columbia University",
    flag:"🇺🇸", funding:"need",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January 1 (Regular Decision)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"TOEFL/IELTS",
    open_to:"All nationalities admitted to Columbia",
    covered:["Meets 100% of demonstrated financial need","Average UG grant ~$62,000/yr","No loans in packages for qualifying students","Graduate aid varies by program"],
    eligibility:["Admission to Columbia University","Demonstrated financial need","All nationalities eligible for UG aid","Graduate aid varies by school/department"],
    docs:["Columbia application","CSS Profile / IDOC","Financial documents","Transcripts","Recommendation letters","SAT/ACT scores","TOEFL/IELTS","Essays"],
    tip:"Columbia meets 100% of demonstrated need for undergrads. Graduate aid varies significantly by program — PhD programs often come with stipends, while Masters require more research. Contact each school separately for graduate funding details.",
    link:"https://sfs.columbia.edu"
  },
  {
    id:57, name:"Rhodes Scholarship (Oxford University)",
    host:"United Kingdom", body:"Rhodes Trust",
    flag:"🇬🇧", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"July–October (varies by country constituency)",
    gpa:"GPA of 3.70/4.0 or higher (without rounding) or a First Class Honours degree",
    age:"Typically 19–25 (varies by country)",
    language:"English — no test usually required",
    open_to:"Citizens of specific country constituencies (Pakistan has its own)",
    covered:["Full Oxford University tuition and college fees","Personal maintenance stipend","Round-trip flights","Health insurance"],
    eligibility:["Exceptional academic achievement","Leadership and service to community","Physical vigor (participation in sports/activity)","Pakistan has a dedicated constituency","Age limit typically 19–25 (check for your country)","Apply through national selection committee"],
    docs:["Rhodes application (online)","Passport copy","Transcripts (all degrees)","Five letters of recommendation","Personal statement","CV / resume","Evidence of extracurricular and community leadership","Medical certificate"],
    tip:"One of the world's most prestigious and oldest scholarships. Pakistan has its own constituency. This is not just about grades — leadership, character, and desire to improve the world are equally weighted. Rhodes scholars are expected to become global leaders.",
    link:"https://www.rhodeshouse.ox.ac.uk"
  },
  {
    id:58, name:"Clarendon Fund Scholarships (Oxford)",
    host:"United Kingdom", body:"University of Oxford",
    flag:"🇬🇧", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Via Oxford graduate admissions (January–March)",
    gpa:"No fixed minimum CGPA but successful applicants typically hold a GPA of at least 3.7 out of 4.0",
    age:"No strict age limit",
    language:"IELTS 7.0+ or equivalent",
    open_to:"All nationalities applying to Oxford graduate programs",
    covered:["Full Oxford University and college fees","Annual living allowance for duration of study"],
    eligibility:["Applying to any University of Oxford graduate program","Exceptional academic record","No separate Clarendon application — automatically considered","Top-ranked candidates in Oxford admissions process"],
    docs:["Oxford graduate program application","Transcripts","Two or three academic references","Personal statement / research proposal","CV / resume","IELTS/TOEFL scores","Writing samples (if required)"],
    tip:"There's no separate application — when you apply to Oxford for a graduate degree, you are automatically considered for Clarendon. The key is submitting an outstanding Oxford application. One of Oxford's most generous awards with about 140 scholarships given annually.",
    link:"https://www.ox.ac.uk/clarendon"
  },
  {
    id:59, name:"Reach Oxford Scholarships (Undergraduate)",
    host:"United Kingdom", body:"University of Oxford",
    flag:"🇬🇧", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"December–February (check Oxford website)",
    gpa:"Strong academic potential (no fixed minimum CGPA)",
    age:"Undergraduate applicants",
    language:"IELTS 7.0+ typically",
    open_to:"Students from low-income developing countries with financial hardship",
    covered:["University fees","Living costs","Return flights each academic year"],
    eligibility:["Student from a developing country","Demonstrated financial hardship","Strong academic potential","Unable to get equivalent education in home country","Applying to Oxford undergraduate admission"],
    docs:["Oxford undergraduate application (UCAS)","Financial hardship documentation","Academic transcripts and predicted grades","Reference letters from teachers","Personal statement","IELTS/TOEFL scores"],
    tip:"Extremely rare — very few spots are given per year. This is Oxford's main route for low-income students from developing countries at undergrad level. Your financial hardship and academic potential must both be clearly demonstrated. Start the Oxford UCAS application early.",
    link:"https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding"
  },
  {
    id:60, name:"UCL Global Undergraduate Scholarships",
    host:"United Kingdom", body:"University College London",
    flag:"🇬🇧", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Varies by scholarship — typically January–March",
    gpa:"Excellent academic record (no fixed minimum CGPA)",
    age:"Undergraduate applicants",
    language:"IELTS 6.5+ or equivalent",
    open_to:"International students admitted to UCL undergraduate programs",
    covered:["£5,000–£22,000 towards tuition fees (varies by award)"],
    eligibility:["Excellent academic record in secondary school","Any nationality","Admitted to a UCL undergraduate program","Based on merit and sometimes financial need"],
    docs:["UCL application (UCAS)","Transcripts","Personal statement","Reference letters","IELTS/TOEFL scores"],
    tip:"UCL offers several scholarship streams for international undergraduates including the Excellence Scholarships. Apply to UCL first and once you have an offer, apply for the scholarships. Amounts vary — check the UCL scholarships page for the most current list.",
    link:"https://www.ucl.ac.uk/scholarships"
  },
  {
    id:61, name:"Warwick Chancellor's International Scholarships (PhD)",
    host:"United Kingdom", body:"University of Warwick",
    flag:"🇬🇧", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically January (check annually)",
    gpa:"Outstanding academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Outstanding international PhD applicants of any nationality",
    covered:["Full international tuition fees","Annual living stipend for full PhD duration"],
    eligibility:["Applying for a PhD at University of Warwick","Exceptional academic achievement","Any field","Any nationality","Automatically considered during PhD application"],
    docs:["Warwick PhD application","Research proposal","Transcripts","Two academic references","Personal statement","CV / resume","IELTS/TOEFL scores"],
    tip:"No separate application needed — you are automatically considered when applying for a PhD at Warwick. Submit the strongest possible PhD application with a well-developed research proposal. Warwick is ranked top 100 globally.",
    link:"https://warwick.ac.uk/services/sc/scholarships"
  },
  {
    id:62, name:"Nottingham Developing Solutions Scholarships",
    host:"United Kingdom", body:"University of Nottingham",
    flag:"🇬🇧", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Typically February (check annually)",
    gpa:"GPA of 2.8 or a 60% average depending on your home country's grading system",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Citizens of Africa, India, or Pakistan specifically",
    covered:["Full tuition fees","Living expenses for duration of Masters"],
    eligibility:["Citizens of Africa, India, or Pakistan","Strong academic record","Commitment to sustainable development in home country","Admitted to a University of Nottingham Masters program"],
    docs:["Nottingham Masters application","Transcripts","Two references","Personal statement","IELTS/TOEFL scores","CV / resume","Development commitment statement"],
    tip:"One of the most Pakistan-accessible UK scholarships — Pakistan is specifically named as an eligible country. Approximately 105 scholarships are awarded per year. Focus your personal statement on how your studies will help Pakistan's development.",
    link:"https://www.nottingham.ac.uk/studywithus/scholarships"
  },
  {
    id:63, name:"Bristol University Think Big Scholarships",
    host:"United Kingdom", body:"University of Bristol",
    flag:"🇬🇧", funding:"partial",
    levels:["undergrad","masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February–March (check current cycle)",
    gpa:"Academic excellence (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.0–6.5+ (varies by program)",
    open_to:"International students (UK, EU, and international) admitted to Bristol",
    covered:["£5,000 to full tuition (varies by award level)"],
    eligibility:["Academic excellence","Any nationality","Admitted to University of Bristol","Separate Think Big application after receiving Bristol offer"],
    docs:["Bristol application","Think Big Scholarship application (after offer)","Transcripts","Personal statement","IELTS/TOEFL scores"],
    tip:"Think Big is a competitive open scholarship. You apply online after receiving a Bristol offer. Awards range from partial to full — the top awards are highly competitive. Make sure you apply early as some categories fill up.",
    link:"https://www.bristol.ac.uk/fees-funding/scholarships"
  },
  {
    id:64, name:"Imperial College London President's PhD Scholarships",
    host:"United Kingdom", body:"Imperial College London",
    flag:"🇬🇧", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"STEM (Science, Technology, Engineering, Medicine)",
    deadline:"January–February (check annually)",
    gpa:"Good academic background (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Top-performing international PhD applicants in STEM",
    covered:["Full tuition fees","£21,000+ per year stipend","Research budget allowance"],
    eligibility:["Top-performing PhD applicants","Any nationality","STEM disciplines only","Strong research proposal","Exceptionally strong academic record"],
    docs:["Imperial PhD application","Research proposal","Transcripts","Two academic references","CV / resume","IELTS/TOEFL scores"],
    tip:"Imperial is ranked in the world top 10 for science and engineering. The President's PhD Scholarship is among the UK's most generous PhD awards. Submit a strong, specific research proposal aligned with an Imperial supervisor's work — contact supervisors before applying.",
    link:"https://www.imperial.ac.uk/scholarships"
  },
  {
    id:65, name:"Oxford Weidenfeld and Hoffmann Programme",
    host:"United Kingdom", body:"University of Oxford / Weidenfeld-Hoffmann Trust",
    flag:"🇬🇧", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields (1-year Oxford Masters only)",
    deadline:"Around January (Oxford application deadline)",
    gpa:"3.5 or above on a 4.0 scale",
    age:"No strict age limit",
    language:"IELTS 7.0+ or equivalent",
    open_to:"Citizens of developing countries with demonstrated leadership",
    covered:["Full Oxford fees","Living expenses","Return flights"],
    eligibility:["Citizen of a developing country","Admitted to an eligible Oxford 1-year taught Masters","Demonstrated leadership and commitment to social change","Intent to return home and contribute","Apply simultaneously for Oxford admission"],
    docs:["Oxford graduate application","Scholarship supporting statement","Transcripts","Two references","Personal statement","IELTS/TOEFL scores","CV / resume"],
    tip:"This scholarship focuses on future leaders from the developing world. Around 70 scholarships are given per year. Your Oxford application itself must be strong, but the WHT supplemental statement should focus on your leadership journey and your concrete vision for returning to create change at home.",
    link:"https://www.whtrust.org"
  },
  {
    id:66, name:"Holland Scholarship (Netherlands)",
    host:"Netherlands", body:"Netherlands Ministry of Education / Dutch Universities",
    flag:"🇪🇺", funding:"partial",
    levels:["undergrad","masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February–April (check per institution)",
    gpa:"GPA of 2.8–3.0 or higher",
    age:"No strict age limit",
    language:"IELTS 6.0+ or equivalent",
    open_to:"Non-EEA citizens applying to Dutch research universities or universities of applied sciences",
    covered:["€5,000 one-time grant towards first year tuition or living"],
    eligibility:["Non-EEA citizens only","Applying to a Dutch research university or university of applied sciences","Strong academic record","First-year students only"],
    docs:["Application through Dutch institution","Transcripts","Motivation letter","CV / resume","IELTS/TOEFL scores","Proof of enrollment or admission offer"],
    tip:"The Holland Scholarship is a one-time €5,000 contribution — it doesn't cover full costs but reduces them significantly. Apply through your Dutch institution after receiving an offer. Netherlands has high-quality affordable education and many English-taught programs.",
    link:"https://www.studyinholland.nl/scholarships"
  },
  {
    id:67, name:"Italian Government (MAECI) Scholarships",
    host:"Italy", body:"Italian Ministry of Foreign Affairs and International Cooperation",
    flag:"🇪🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February–April (via Italian Embassy in Islamabad)",
    gpa:"3.0/4.0 or higher",
    age:"Varies by level",
    language:"Italian or English depending on program",
    open_to:"All nationalities applying to Italian universities",
    covered:["Monthly grant","Partial tuition exemption","Health insurance coverage"],
    eligibility:["Strong academic record","Italian language skills for Italian-taught programs","Any nationality","Must apply via Italian Embassy in Pakistan","Relevant academic background for chosen program"],
    docs:["Embassy application form","Passport copy","Transcripts and degree certificates","Motivation letter","CV / resume","Language certificate (Italian or English)","Medical certificate"],
    tip:"Apply through the Italian Embassy in Islamabad — they coordinate the selection process for Pakistani applicants. Italian universities are prestigious and affordable. Many English-taught programs exist in STEM, arts, and business. Italian language knowledge is a strong advantage.",
    link:"https://esteri.it/en/academic-scholarships"
  },
  {
    id:68, name:"Padua International Excellence Scholarship (Italy)",
    host:"Italy", body:"University of Padua",
    flag:"🇪🇺", funding:"full",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"April–May (check annually)",
    gpa:"Strong international academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"English (IELTS/TOEFL) or Italian",
    open_to:"Non-EU international students admitted to University of Padua Masters programs",
    covered:["Full tuition fee waiver for 2 years of Masters program"],
    eligibility:["Non-EU international students","Strong academic record","Admitted to a University of Padua Masters program","All disciplines"],
    docs:["University of Padua application","Transcripts","Passport copy","Motivation letter","CV / resume","IELTS/TOEFL or Italian certificate","Previous degree certificate"],
    tip:"University of Padua is one of Europe's oldest and most prestigious — founded in 1222. About 300 scholarships given annually. The full tuition waiver for 2 years is extremely generous. Apply early as competition is high among non-EU applicants.",
    link:"https://www.unipd.it/en/scholarships-international"
  },
  {
    id:69, name:"Master Mind Scholarships (Flanders, Belgium)",
    host:"Belgium", body:"Government of Flanders",
    flag:"🇪🇺", funding:"partial",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Around February (check annually)",
    gpa:"minimum GPA of 3.5 out of 4.0",
    age:"No strict age limit",
    language:"English / Dutch depending on program",
    open_to:"Non-EEA students applying to Flemish universities",
    covered:["€8,000 per year scholarship towards living costs"],
    eligibility:["Non-EEA students","High-quality home university origin","Strong academic record","Accepted at a Flemish university or university college","Competitive merit-based selection"],
    docs:["Flemish institution application","Master Mind application","Transcripts","Motivation letter","CV / resume","Language certificate","Proof of acceptance at Flemish institution"],
    tip:"You must first be accepted at a Flemish university before applying for Master Mind. Belgium (Flanders) has world-class universities like KU Leuven and Ghent. €8,000/yr towards living costs is a meaningful contribution on top of tuition.",
    link:"https://www.studyinflanders.be/scholarships/master-mind-scholarships"
  },
  {
    id:70, name:"Government of Ireland International Education Scholarship",
    host:"Ireland", body:"Government of Ireland",
    flag:"🇪🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Around February (check annually)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Non-EU/EEA students admitted to Irish higher education institutions",
    covered:["Full tuition fees","€10,000 stipend per year"],
    eligibility:["Non-EU/EEA citizens","Strong academic record","Any discipline","Admitted to an Irish higher education institution","Both Masters and PhD eligible"],
    docs:["Application via Gov.ie portal","Admission offer from Irish university","Transcripts","Personal statement","CV / resume","Two references","IELTS/TOEFL scores"],
    tip:"About 60 scholarships per year with generous full fees + living allowance. Ireland has excellent universities and a thriving tech sector — Dublin is a hub for major tech companies like Google and Meta. STEM and business programs are especially strong.",
    link:"https://www.gov.ie/en/service/ireland-scholarship"
  },
  {
    id:71, name:"Finnish Government Scholarships (EDUFI)",
    host:"Finland", body:"Finnish National Agency for Education (EDUFI)",
    flag:"🇪🇺", funding:"full",
    levels:["phd","postdoc"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Research Fields",
    deadline:"February–March (check annually)",
    gpa:"GPA of at least 3.0/4.0 or 70%",
    age:"No strict age limit",
    language:"English / Finnish depending on program",
    open_to:"Citizens of specific partner countries for research visits and PhD programs",
    covered:["Monthly grant: €1,500 for PhD / €1,800–2,500 for postdoc"],
    eligibility:["Citizen of a specific partner country","PhD or research level only","Typically requires a host institution invitation in Finland","Strong research record and publications"],
    docs:["EDUFI application form","Research plan","Passport copy","Invitation letter from Finnish host institution","Transcripts and degree certificates","CV / resume with publications","Two academic references"],
    tip:"EDUFI scholarships are primarily for research visits or co-tutelle PhD programs — not a full standalone PhD. You need a Finnish host institution to invite you first. Contact Finnish university professors in your field directly and propose a research collaboration.",
    link:"https://www.oph.fi/en/grants-and-scholarships"
  },
  {
    id:72, name:"Danish Government Scholarships",
    host:"Denmark", body:"Danish Ministry of Higher Education / Danish Universities",
    flag:"🇪🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (varies by institution)",
    deadline:"Varies by institution — typically March",
    gpa:"3.0-3.5 or higher",
    age:"No strict age limit",
    language:"English / Danish depending on program",
    open_to:"Non-EU/EEA students applying to specific Danish institutions",
    covered:["Full tuition fees","DKK 6,000–8,000 per month living stipend"],
    eligibility:["Non-EU/EEA citizens","Applying to specific programs at Danish institutions (DTU, Copenhagen, etc.)","High academic performance","English language proficiency"],
    docs:["University application","Scholarship application (per university)","Transcripts","Motivation letter","CV / resume","IELTS/TOEFL scores","References"],
    tip:"Denmark doesn't have one centralized government scholarship — awards are distributed through universities like DTU, University of Copenhagen, and Aarhus. DTU is exceptional for engineering. Check each university's scholarship page individually as deadlines and availability differ.",
    link:"https://www.ufm.dk"
  },
  {
    id:73, name:"Heinrich Böll Foundation Scholarships (Germany)",
    host:"Germany", body:"Heinrich Böll Foundation",
    flag:"🇪🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"March 1 and September 1 (twice per year)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"German C1 or English (depending on program)",
    open_to:"Any nationality studying or planning to study in Germany",
    covered:["Monthly stipend ~€934 + €300 book allowance for Masters/PhD","Social and academic support network"],
    eligibility:["Studying or applying to study in Germany","Political engagement and democratic values","Commitment to sustainability and social justice","Academic excellence","Any nationality"],
    docs:["Böll Foundation application portal","Transcripts","Motivation letter","Two references","German or English language certificate","CV / resume","Evidence of political or civic engagement"],
    tip:"The Heinrich Böll Foundation has a Green-liberal political orientation and values sustainability and democratic participation. Thousands of international scholars are actively supported. Two application rounds per year — pick the one that aligns best with your enrollment timeline in Germany.",
    link:"https://www.boell.de/en/foundation-scholarship"
  },
  {
    id:74, name:"Konrad-Adenauer-Stiftung Scholarships (Germany)",
    host:"Germany", body:"Konrad-Adenauer-Stiftung (KAS)",
    flag:"🇪🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January 15 and July 15 (twice per year)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"German B2+ recommended; English possible for some programs",
    open_to:"Any nationality studying in German universities",
    covered:["Monthly stipend €934 + €300 book allowance","Study and research costs","Language courses support"],
    eligibility:["Studying at a German university","Christian democratic or conservative values alignment","Academic excellence","Civic engagement and social responsibility","Any nationality"],
    docs:["KAS application portal","Transcripts","Motivation letter","Two references","German language certificate","CV / resume","Evidence of civic/political engagement"],
    tip:"KAS is Germany's Christian democratic political foundation — one of the largest scholarship programs in Germany with thousands of active scholars. Two rounds per year. German proficiency is important for integration into German university life.",
    link:"https://www.kas.de/en/web/kas/stipendien"
  },
  {
    id:75, name:"Friedrich Ebert Stiftung Scholarships (Germany)",
    host:"Germany", body:"Friedrich Ebert Stiftung (FES)",
    flag:"🇪🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"March 1 and September 1 (twice per year)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"German B2+ recommended",
    open_to:"Any nationality studying in Germany with social-democratic values",
    covered:["Monthly stipend ~€934 + €300 book allowance for Masters/PhD","Social and academic integration support"],
    eligibility:["Studying at a German university","Social-democratic values and civic engagement","Academic excellence","Any nationality","Commitment to democracy and social justice"],
    docs:["FES application portal","Transcripts","Motivation letter","Two references","German language certificate","CV / resume","Civic/political engagement evidence"],
    tip:"FES is Germany's social-democratic political foundation — one of the largest and most international scholarship programs in Germany. About 3,200 scholars are actively supported. Two rounds per year. Very inclusive of international applicants.",
    link:"https://www.fes.de/en/studienfoerderung"
  },
  {
    id:76, name:"SBW Berlin Scholarship (Germany)",
    host:"Germany", body:"SBW Berlin",
    flag:"🇪🇺", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Around September (for the following year's intake)",
    gpa:"3.2 to 3.4 out of 4.0",
    age:"18-30",
    language:"German B2+ or English depending on program",
    open_to:"Students from developing or transition countries applying to Berlin universities",
    covered:["Full tuition fees","€1,000 per month living stipend","Housing support assistance"],
    eligibility:["Citizens of developing or transition countries","Masters applicant at a Berlin university","Strong academic record","Demonstrated leadership potential","Intent to return and contribute to home country"],
    docs:["SBW application form","Transcripts","Motivation letter (focused on development goals)","Two references","Passport copy","Language certificate","CV / resume","Evidence of leadership"],
    tip:"About 50 scholarships are given per year to students from the developing world studying in Berlin. €1,000/month is generous for Berlin living costs. Berlin is Germany's most vibrant, multicultural city and an excellent place to study.",
    link:"https://www.sbw-berlin.de/en"
  },
  {
    id:77, name:"Azerbaijan Government Scholarship",
    host:"Azerbaijan", body:"Government of Azerbaijan",
    flag:"🇪🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"April–June (via Azerbaijani Embassy)",
    gpa:"minimum academic performance of 70% (or a GPA of 7/10, or equivalent)",
    age:"35-40",
    language:"Azerbaijani or Russian primarily; IELTS 5.5 (TOEFL 50)",
    open_to:"Non-Azerbaijani citizens from any country",
    covered:["Full tuition fees","Dormitory accommodation","Monthly stipend"],
    eligibility:["Non-Azerbaijani citizen","Apply through Azerbaijani Embassy in Pakistan","Strong academic background","English or Azerbaijani proficiency required"],
    docs:["Embassy application form","Passport copy","Transcripts","Degree certificate","Medical certificate","Two references","Motivation letter"],
    tip:"A less-known but accessible scholarship route. Programs are mainly in Azerbaijani or Russian, though English-taught options are growing. Azerbaijan is an OIC member with strong cultural ties to Pakistan. Apply via the Azerbaijani Embassy in Islamabad.",
    link:"https://edu.gov.az"
  },
  {
    id:78, name:"ETH Zurich Excellence Scholarship (ESOP)",
    host:"Switzerland", body:"ETH Zurich",
    flag:"🇪🇺", funding:"full",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"STEM, Architecture, Environmental Sciences",
    deadline:"December 15 (for following academic year)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"English (most programs); German for some",
    open_to:"Any nationality applying to ETH Zurich Masters programs",
    covered:["Full tuition fees","CHF 12,000 per semester living stipend"],
    eligibility:["Exceptional academic record — top of graduating class","Any nationality","Applying to an ETH Zurich Masters program","Strong motivation letter required","Research or academic excellence"],
    docs:["ETH Zurich Masters application (simultaneous)","ESOP application form","Transcripts (outstanding grades required)","Motivation letter","Two academic references","CV / resume","English proficiency certificate"],
    tip:"ETH Zurich is ranked #7 globally. The ESOP scholarship is extremely competitive — you need to be at the very top of your undergraduate class. About 100 scholarships per year. Your motivation letter must convey a strong research interest aligned with ETH faculty.",
    link:"https://ethz.ch/en/studies/financial/scholarships/esop"
  },
  {
    id:79, name:"ANSO Scholarship (China — CAS)",
    host:"China", body:"Alliance of International Science Organizations",
    flag:"🌏", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Science, Technology, Engineering, Mathematics (STEM)",
    deadline:"January–March (check annually)",
    gpa:"Strong science/research background(no fixed minimum CGPA) ",
    age:"No strict age limit",
    language:"English (most programs)",
    open_to:"Citizens of countries along the Belt & Road Initiative (Pakistan included)",
    covered:["Full tuition fees","Monthly stipend ~CNY 3,000 (Masters) / CNY 3,500 (PhD)","Accommodation support","Health insurance"],
    eligibility:["Citizens of Belt & Road countries","Applying to Chinese Academy of Sciences institutions","Strong science and technology background","Good academic record"],
    docs:["ANSO application form","Transcripts","Degree certificate","Research proposal","Passport copy","Two academic references","CV / resume","English proficiency certificate"],
    tip:"CAS (Chinese Academy of Sciences) universities are world-class in STEM research. Pakistan is a BRI partner country, making Pakistani students eligible. Focus your research proposal tightly on a specific lab or research group at a CAS institution.",
    link:"https://www.anso.cas.cn"
  },
  {
    id:80, name:"Yenching Academy Scholarship (Peking University)",
    host:"China", body:"Yenching Academy, Peking University",
    flag:"🌏", funding:"full",
    levels:["masters"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"China Studies (Interdisciplinary — Politics, History, Economics, Philosophy, Law)",
    deadline:"October–December (check annually)",
    gpa:"no fixed minimum CGPA, but successful applicants often possess a GPA of 3.5/4.0 or higher ",
    age:"Under 28 years old",
    language:"English (program is English-taught)",
    open_to:"Any nationality with interest in China and global leadership",
    covered:["Full tuition fees","Room and board on PKU campus","Monthly stipend","Round-trip airfare"],
    eligibility:["Any nationality","Bachelor's degree","Under 28 years old","Strong academics","Interest in China studies and global leadership","Leadership experience"],
    docs:["Yenching Academy application","Transcripts","Three letters of recommendation","Personal statement","Writing sample (2,000–4,000 words on China-related topic)","CV / resume","TOEFL/IELTS or equivalent"],
    tip:"This is a prestigious 2-year interdisciplinary Masters at Peking University (PKU). It's fully English-taught and designed for future global leaders interested in China. About 125 scholars per year from around the world. A great option if you're interested in China's role in global affairs.",
    link:"https://yenchingacademy.pku.edu.cn"
  },
  {
    id:81, name:"Singapore International Graduate Award (SINGA)",
    host:"Singapore", body:"A*STAR / NUS / NTU / SUTD",
    flag:"🌏", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Biomedical Sciences, Physical Sciences, Engineering, Computer Science",
    deadline:"December–March and June–September (two rounds)",
    gpa:"Strong research and academic record (no fixed minimum CGPA) ",
    age:"No strict age limit",
    language:"English (Singapore is English medium)",
    open_to:"Any nationality with strong research background",
    covered:["Full tuition fees","SGD 2,000/month stipend (increased to 2,500 after qualifying exam)","Settlement allowance","Travel grant"],
    eligibility:["Any nationality","Bachelor's with honors or strong Masters","Strong research aptitude in STEM","No GMAT or GRE required","Conduct research in A*STAR, NUS, NTU, or SUTD labs"],
    docs:["SINGA application portal","Transcripts","Two academic references","Research statement","CV / resume","English proficiency","Passport copy"],
    tip:"Singapore is one of Asia's top research destinations and fully English-medium. SINGA joins you with world-class research labs. No GRE required, which is a big advantage. Two application windows per year. Choose your preferred lab and supervisor before applying.",
    link:"https://www.singa.a-star.edu.sg"
  },
  {
    id:82, name:"NUS Research Scholarship (Singapore)",
    host:"Singapore", body:"National University of Singapore",
    flag:"🌏", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (strongest in STEM, Computing, Business)",
    deadline:"Rolling — January and August intakes",
    gpa:"Strong academic and research record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"English",
    open_to:"Any nationality applying for a PhD at NUS",
    covered:["Full tuition fees","SGD 2,000–2,500 per month stipend","Conference funding"],
    eligibility:["Any nationality","Bachelor's with honors or Masters","Strong academic record","Applying for NUS PhD","Automatically considered during PhD application"],
    docs:["NUS PhD application","Research proposal","Transcripts","Two academic references","CV / resume","TOEFL/IELTS scores","Statement of purpose"],
    tip:"NUS is ranked #8 globally and is one of Asia's top universities. The research scholarship is automatically considered when you apply for a PhD. Contact potential supervisors before applying — a supervisor's agreement greatly improves your chances. Singapore's quality of life is excellent.",
    link:"https://www.nus.edu.sg/registrar/prospective-students/graduate"
  },
  {
    id:83, name:"NTU Research Scholarship (Singapore)",
    host:"Singapore", body:"Nanyang Technological University",
    flag:"🌏", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"STEM, Business, Humanities (primarily STEM)",
    deadline:"Rolling — January and August intakes",
    gpa:"Strong academic and research record (no fixed minimum CGPA)",
    age:"under 30",
    language:"English",
    open_to:"Any nationality applying for a PhD at NTU",
    covered:["Full tuition fees","SGD 2,000 per month stipend"],
    eligibility:["Any nationality","Bachelor's with honors","Strong research background","STEM focus primarily","Automatically considered during PhD application"],
    docs:["NTU PhD application","Research proposal","Transcripts","Two academic references","CV / resume","IELTS/TOEFL","Statement of purpose"],
    tip:"NTU is ranked in the global top 15 and is world-leading in engineering, computer science, and materials. Like NUS, contact potential supervisors first. NTU and NUS are both excellent choices and Singapore offers a high quality of life with safety and connectivity.",
    link:"https://www.ntu.edu.sg/graduate-college/admissions-programmes"
  },
  {
    id:84, name:"UST South Korea Scholarship",
    host:"South Korea", body:"University of Science and Technology Korea",
    flag:"🇰🇷", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Science, Technology, Engineering (STEM only)",
    deadline:"Varies by campus — typically March–April for fall intake",
    gpa:" 3.0 or above on a 4.0 scale",
    age:"under 40",
    language:"English (most programs)",
    open_to:"Any nationality with STEM background",
    covered:["Full tuition fees","Monthly stipend","Health insurance"],
    eligibility:["Any nationality","STEM background required","Applying to UST Korea","Research-oriented focus","Strong academic record in science or engineering"],
    docs:["UST application form","Transcripts","Degree certificate","Research proposal","Two academic references","CV / resume","IELTS/TOEFL","Passport copy"],
    tip:"UST operates across 30+ government research institutes in Korea — a unique research-oriented environment. All international graduate students are typically fully funded. English-taught programs available. Korea is becoming a top destination for STEM researchers.",
    link:"https://www.ust.ac.kr/en"
  },
  {
    id:85, name:"Thailand Government (SIIT) Scholarship",
    host:"Thailand", body:"Sirindhorn International Institute of Technology — Thammasat University",
    flag:"🌏", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Engineering, Technology, Science",
    deadline:"March–June (check annually)",
    gpa:"GPA atleast of 2.75",
    age:"Under 25 (UG) / No strict limit (graduate)",
    language:"English (all SIIT programs are English-taught)",
    open_to:"Citizens of ASEAN and developing countries",
    covered:["Full tuition fees","Monthly stipend","Housing allowance","Round-trip airfare"],
    eligibility:["Citizens of ASEAN or developing countries","STEM academic background","English proficiency","Strong academic record","Commitment to returning home after study"],
    docs:["SIIT application form","Transcripts","Degree certificate","Passport copy","Two references","IELTS/TOEFL scores","CV / resume","Personal statement"],
    tip:"SIIT at Thammasat University is Thailand's premier international engineering school. All programs are in English. Thailand is an affordable, welcoming country with strong cultural ties to Muslim communities. An underrated scholarship destination for Pakistani students.",
    link:"https://www.siit.tu.ac.th/scholarship"
  },
  {
    id:86, name:"Hong Kong PhD Fellowship Scheme (HKPFS)",
    host:"Hong Kong", body:"Research Grants Council of Hong Kong",
    flag:"🌏", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Research Fields",
    deadline:"September–December (check annually)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"English (Hong Kong universities are English-medium)",
    open_to:"Any nationality completing or recently completing a bachelor's or master's degree",
    covered:["HKD 27,600 per month stipend","HKD 13,800 per year conference and research travel grant"],
    eligibility:["Any nationality","Completing or recently completed bachelor's or Master's degree","Excellent academic record and research potential","Applying to a UGC-funded HK university (HKU, HKUST, CUHK etc.)"],
    docs:["HKPFS application (online)","Transcripts","Research proposal","Two academic references","CV with publications","Personal statement","IELTS/TOEFL scores"],
    tip:"One of Asia's most prestigious and best-paying PhD awards — over HKD 27,600/month is extremely generous. About 300 fellowships per year. HK universities like HKU, HKUST, and CUHK are all world-class. Apply to multiple HK universities simultaneously for better chances.",
    link:"https://www.rgc.ugc.edu.hk/hkphd"
  },
  {
    id:87, name:"IsDB Scholarship (Islamic Development Bank)",
    host:"Multiple Muslim Countries", body:"Islamic Development Bank",
    flag:"🌏", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"STEM, Economics, Development, Health Sciences",
    deadline:"Varies by country — typically January–May",
    gpa:"minimum of 70% or equivalent",
    age:" Under 35 (Masters) / Under 40 (PhD)",
    language:"English, Arabic, or French depending on country",
    open_to:"Muslim citizens of IsDB member countries (Pakistan is a member)",
    covered:["Full tuition fees","Monthly living allowance","Round-trip travel","Medical insurance","Research support allowance"],
    eligibility:["Muslim citizen of an IsDB member country","Under 35 for Masters / under 40 for PhD","Strong academic record","Applying to an approved program","Commitment to return and contribute to development"],
    docs:["IsDB application form","Passport copy","Degree certificates and transcripts","Two recommendation letters","Study plan / research proposal","Medical certificate","Evidence of IsDB member country citizenship"],
    tip:"Pakistan is an IsDB member country — apply via the IsDB country office or the Higher Education Commission (HEC) Pakistan. This is one of the most accessible routes for Pakistani Muslims seeking graduate education internationally. Over 1,000 scholarships given per year.",
    link:"https://www.isdb.org/scholarships"
  },
  {
    id:88, name:"Research Training Program (RTP) — Australia",
    host:"Australia", body:"Australian Government — Department of Education",
    flag:"🇦🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Rolling — varies by Australian university (consult each institution)",
    gpa:"Bachelor's with honors or Masters with research component (80% or higher)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Any nationality applying to Australian university research programs",
    covered:["Full tuition fees for full duration","Living stipend approximately AUD 32,000 per year"],
    eligibility:["Any nationality","Strong academic record","Admission to an Australian university research program","Bachelor's with first class honors or Masters with research"],
    docs:["Australian university application","Research proposal","Transcripts","Two academic references","CV / resume","IELTS/TOEFL scores","Statement of purpose"],
    tip:"RTP is funded by the Australian government and distributed to universities — apply directly to Australian universities and you'll be automatically considered. Each university has a quota. ANU, Melbourne, Monash, and UNSW are the top picks. Contact supervisors before applying.",
    link:"https://www.education.gov.au/rtp"
  },
  {
    id:89, name:"Melbourne Research Scholarships (Australia)",
    host:"Australia", body:"University of Melbourne",
    flag:"🇦🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"October 31 and April 30 (two rounds per year)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Any nationality admitted to a research degree at University of Melbourne",
    covered:["Full tuition fees","AUD 32,500 per year living stipend"],
    eligibility:["Any nationality","Admitted to a Masters by Research or PhD at UniMelb","Strong academic record","Automatically considered upon application"],
    docs:["UniMelb research degree application","Research proposal","Transcripts","Two academic references","CV / resume","IELTS/TOEFL scores"],
    tip:"University of Melbourne is ranked top 35 globally and Australia's top university. The scholarship is automatically considered when you apply for a research degree — no separate application. Two intake rounds per year. Contact supervisors first.",
    link:"https://www.unimelb.edu.au/scholarships"
  },
  {
    id:90, name:"Monash Graduate Scholarships (Australia)",
    host:"Australia", body:"Monash University",
    flag:"🇦🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Rolling (contact Monash for current intake dates)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Any nationality with outstanding research degree application",
    covered:["Full tuition fees","AUD 32,500 per year living stipend"],
    eligibility:["Any nationality","Bachelor's with honors or Masters with research component","Applying for Monash research degree","Automatically assessed during application"],
    docs:["Monash research degree application","Research proposal","Transcripts","Academic references","CV / resume","IELTS/TOEFL scores"],
    tip:"Monash is part of Australia's prestigious 'Group of Eight' universities. Automatically assessed during your research degree application — no separate application needed. Monash has a strong global outlook and a large international student community.",
    link:"https://www.monash.edu/graduate-research/future-students/scholarships"
  },
  {
    id:91, name:"ANU University Research Scholarships (Australia)",
    host:"Australia", body:"Australian National University",
    flag:"🇦🇺", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"October 31 and April 30 (two rounds)",
    gpa:"80%+ or higher GPA depending on the grading scale",
    age:"No strict age limit",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Any nationality with outstanding research potential",
    covered:["Full tuition fees","AUD 32,500 per year stipend","Relocation grant"],
    eligibility:["Any nationality","Outstanding research potential","Admitted to ANU research program","Strong academic record","Automatically considered during ANU application"],
    docs:["ANU research degree application","Research proposal","Transcripts","Academic references","CV / resume","IELTS/TOEFL scores"],
    tip:"ANU is ranked top 30 globally and Australia's national university based in Canberra. ANU Chancellor's International Scholarship is also available on merit. Two intake rounds. Contact supervisors in advance — a willing supervisor makes the scholarship process much smoother.",
    link:"https://www.anu.edu.au/students/scholarships"
  },
  {
    id:92, name:"Manaaki New Zealand Scholarships",
    host:"New Zealand", body:"New Zealand Ministry of Foreign Affairs and Trade (MFAT)",
    flag:"🇦🇺", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February–April (check annually)",
    gpa:"CGPA of 3.0 or higher",
    age:"Candidates must be at least 18 years old at the time of application",
    language:"IELTS 6.5+ or equivalent",
    open_to:"Citizens of eligible developing countries — Pakistan is eligible",
    covered:["Full tuition fees","Living allowance","Round-trip airfare","Health insurance"],
    eligibility:["Citizen of an eligible developing country","Strong academic record","Commitment to returning and contributing to development at home","Apply via New Zealand Embassy or MFAT"],
    docs:["Manaaki NZ application form","Transcripts","Degree certificate","Passport copy","Two references","Personal statement","IELTS/TOEFL scores","Development plan statement"],
    tip:"About 300 scholarships per year. New Zealand is a beautiful, safe, and welcoming country. Pakistani students are eligible. Apply via the New Zealand Embassy in Islamabad. Focus your statement on how your studies will help Pakistan's development.",
    link:"https://www.mfat.govt.nz/manaaki-nz-scholarships"
  },
  {
    id:93, name:"Vanier Canada Graduate Scholarships",
    host:"Canada", body:"Government of Canada",
    flag:"🇨🇦", funding:"full",
    levels:["phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Research Fields",
    deadline:"October–November (nomination through university)",
    gpa:"GPA of 3.7/4.0 or higher",
    age:"Candidates must be at least 18 years old at the time of application",
    language:"English or French",
    open_to:"Canadian and international students enrolled or applying to a Canadian PhD program",
    covered:["CAD 50,000 per year for 3 years"],
    eligibility:["Academic excellence","Research potential","Leadership qualities","Must be nominated by a Canadian university — cannot apply directly","Canadian or international applicants"],
    docs:["Vanier application (via university nomination)","Research proposal","Transcripts","Three academic references","CV / resume","Leadership evidence","Language proficiency"],
    tip:"You cannot apply directly — your Canadian university must nominate you. About 167 scholarships per year. Contact the graduate school of your Canadian university to express interest and build a relationship with a potential supervisor first. CAD 50,000/yr for 3 years is extremely generous.",
    link:"https://www.vanier.gc.ca"
  },
  {
    id:94, name:"Lester B. Pearson International Scholarship (University of Toronto)",
    host:"Canada", body:"University of Toronto",
    flag:"🇨🇦", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"November (school nomination deadline)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Final year of secondary school",
    language:"IELTS/TOEFL required",
    open_to:"International students nominated by their secondary school",
    covered:["Full tuition","Books","Incidental fees","University residence for 4 years"],
    eligibility:["International students currently in final year of secondary school","Exceptional academics","Demonstrated leadership and community impact","Must be nominated by your secondary school","Commitment to positive change"],
    docs:["School nomination submission","UofT application","Secondary school transcripts","School report","Two teacher references","Personal profile","TOEFL/IELTS scores"],
    tip:"You MUST be nominated by your school — approach your principal or headmaster well in advance of the November deadline. University of Toronto's most prestigious international undergrad scholarship. Only about 37 awards per year globally. Your school may only nominate a limited number of students.",
    link:"https://future.utoronto.ca/finances/pearson"
  },
  {
    id:95, name:"UBC International Scholars Program (Canada)",
    host:"Canada", body:"University of British Columbia",
    flag:"🇨🇦", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"October–December (check annually)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Undergraduate applicants",
    language:"IELTS 6.5+ / TOEFL 90+",
    open_to:"International students applying to UBC",
    covered:["Full tuition for 4 years","CAD $10,000 per year living allowance"],
    eligibility:["International students","Exceptional academic record","Leadership and community involvement","Applying to UBC","Strong global perspective"],
    docs:["UBC application","International Scholar application form","Transcripts","Two references","Essays on leadership and global impact","IELTS/TOEFL scores"],
    tip:"About 20 scholarships per year — very competitive. UBC is one of Canada's top universities and Vancouver is a world-class city. The scholarship considers academics, leadership, and your vision for making a global impact. UBC is particularly strong in tech, science, and business.",
    link:"https://students.ubc.ca/enrolment/finances/awards-scholarships"
  },
  {
    id:96, name:"Karen McKellin International Leader of Tomorrow (UBC)",
    host:"Canada", body:"University of British Columbia",
    flag:"🇨🇦", funding:"full",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"February 28",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Undergraduate applicants",
    language:"IELTS 6.5+ / TOEFL 90+",
    open_to:"International students with financial need admitted to UBC",
    covered:["Full cost of attendance — tuition, living, books based on demonstrated need"],
    eligibility:["International student with financial need","Exceptional academic record","Leadership experience","Admitted to UBC","Need-based full scholarship"],
    docs:["UBC application","Karen McKellin application","Financial need documentation","Transcripts","Leadership evidence","IELTS/TOEFL scores","References"],
    tip:"Unlike the UBC International Scholar which is purely merit, this scholarship combines merit with financial need. If you have financial need AND great academics, this is worth applying for. Full cost of attendance based on your actual financial situation.",
    link:"https://students.ubc.ca/enrolment/finances/awards-scholarships"
  },
  {
    id:97, name:"York University International Entrance Scholarships (Canada)",
    host:"Canada", body:"York University",
    flag:"🇨🇦", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"Rolling — February 1 recommended",
    gpa:"85% or higher",
    age:"Undergraduate applicants",
    language:"IELTS 6.5+ / TOEFL 90+",
    open_to:"International students applying to York University",
    covered:["CAD $35,000–$140,000 total over 4 years based on GPA"],
    eligibility:["International students","Strong secondary school grades (80%+ average)","Automatic consideration on admission — no separate application","All nationalities"],
    docs:["York University application","Official secondary school transcripts","IELTS/TOEFL scores","Proof of citizenship/passport"],
    tip:"No separate application needed — York considers you automatically based on your GPA when you apply. Up to $140,000 total over 4 years for very high averages. York is Toronto's second university and is growing rapidly in CS, business, and law programs.",
    link:"https://www.yorku.ca/futurestudents/international/scholarships"
  },
  {
    id:98, name:"Waterloo International Student Entrance Scholarship (Canada)",
    host:"Canada", body:"University of Waterloo",
    flag:"🇨🇦", funding:"partial",
    levels:["undergrad"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields (strongest in Engineering, CS, Math)",
    deadline:"Rolling",
    gpa:"90% or above",
    age:"Undergraduate applicants",
    language:"IELTS 6.5+ / TOEFL 90+",
    open_to:"International applicants to University of Waterloo",
    covered:["CAD $10,000 one-time scholarship"],
    eligibility:["International applicants","High academic average (90%+)","Applying to any Waterloo program","Automatic consideration"],
    docs:["Waterloo application","Secondary school transcripts","IELTS/TOEFL scores"],
    tip:"University of Waterloo is Canada's #1 university for computer science and engineering and is globally respected in tech. The $10,000 scholarship is automatic — no extra effort needed. Waterloo's co-op program means you earn real work experience and salary during your degree.",
    link:"https://uwaterloo.ca/future-students/financing-your-waterloo-education"
  },
  {
    id:99, name:"KAUST Fellowship (Saudi Arabia)",
    host:"Saudi Arabia", body:"King Abdullah University of Science and Technology",
    flag:"🕌", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Science, Engineering, Mathematics, Computer Science",
    deadline:"Rolling — typically January–February for fall intake",
    gpa:"GPA is 3.0 on a 4.0 scale",
    age:"Under 30 for Master’s degree and under 35 for a Ph.D. degree",
    language:"English (all programs are in English)",
    open_to:"Any nationality with strong STEM background",
    covered:["Full tuition fees","USD 20,000 per year (Masters) to USD 25,000 per year (PhD) tax-free stipend","On-campus housing","Medical insurance","Relocation support"],
    eligibility:["Any nationality","Bachelor's degree in relevant STEM field","Strong research aptitude","GRE not required","Research interest aligned with KAUST faculty"],
    docs:["KAUST application portal","Transcripts","Two academic references","Research statement","CV / resume","English proficiency certificate","Passport copy"],
    tip:"KAUST is a world-class research university on the Red Sea coast of Saudi Arabia — often compared to MIT in research focus. All programs are in English. The tax-free stipend on a gated campus with world-class amenities is exceptional. A very accessible and financially generous option.",
    link:"https://www.kaust.edu.sa/en/study"
  },
  {
    id:100, name:"Qatar University Scholarships",
    host:"Qatar", body:"Qatar University",
    flag:"🕌", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"All Fields",
    deadline:"January–February (check annually)",
    gpa:"2.5 to 3.5",
    age:"No strict age limit",
    language:"Arabic and/or English depending on program",
    open_to:"International students admitted to Qatar University",
    covered:["Full tuition fees","Monthly allowance","Accommodation (varies by scholarship type)"],
    eligibility:["International students","Various academic disciplines","Strong academic record","Apply via QU admissions portal","Multiple scholarship types available"],
    docs:["Qatar University application","Transcripts","Degree certificate","Passport copy","Two references","IELTS/TOEFL or Arabic proficiency","Personal statement"],
    tip:"Qatar is one of the wealthiest countries in the world and invests heavily in higher education. Qatar University has been rapidly improving its international rankings. Qatar's strong Islamic cultural environment and proximity to Pakistan make it an attractive option for Pakistani students.",
    link:"https://www.qu.edu.qa/en/scholarships"
  },
  {
    id:101, name:"HBKU Scholarship (Hamad Bin Khalifa University — Qatar)",
    host:"Qatar", body:"Hamad Bin Khalifa University — Qatar Foundation",
    flag:"🕌", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Law, Policy, Islamic Studies, Engineering, Data Science, Humanities",
    deadline:"January–March (check annually)",
    gpa:"GPA of 3.0 out of 4.0",
    age:"No strict age limit",
    language:"English (and Arabic for Islamic Studies)",
    open_to:"Any nationality admitted to HBKU programs",
    covered:["Full tuition fees","Monthly stipend","Housing or housing allowance","Medical insurance"],
    eligibility:["Any nationality","Bachelor's degree","Strong academic record","Specific programs available","Admitted to HBKU"],
    docs:["HBKU application","Transcripts","Degree certificate","Two references","Personal statement","CV / resume","IELTS/TOEFL scores","Passport copy"],
    tip:"HBKU is Qatar's flagship research university in Education City — alongside campuses of Georgetown, Cornell, CMU, Northwestern, and UCL. A truly unique academic environment. The Islamic Studies and policy programs are particularly strong and relevant for Pakistani applicants.",
    link:"https://www.hbku.edu.qa/en/admissions/scholarships"
  },
  {
    id:102, name:"Khalifa University Scholarships (UAE)",
    host:"UAE", body:"Khalifa University, Abu Dhabi",
    flag:"🕌", funding:"full",
    levels:["undergrad","masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"STEM, Engineering, Computer Science, AI",
    deadline:"Rolling — typically November–April",
    gpa:"CGPA of 3.0 out of 4.0",
    age:"No strict age limit",
    language:"English (all programs in English)",
    open_to:"Any nationality with STEM background",
    covered:["Full tuition fees","Monthly stipend AED 4,000–5,000","Housing allowance","Health insurance"],
    eligibility:["Any nationality","STEM or Engineering background","Strong GPA","English proficiency","Admitted to a Khalifa University program"],
    docs:["Khalifa University application","Transcripts","Degree certificate","Two references","CV / resume","IELTS/TOEFL","Personal statement","Passport copy"],
    tip:"Khalifa University is Abu Dhabi's top STEM institution with partnerships with MIT and Lockheed Martin. A research-intensive environment. UAE is a stable, internationally connected destination. Pakistani community is large and well-established in the UAE.",
    link:"https://www.ku.ac.ae/admissions/scholarships"
  },
  {
    id:103, name:"MBZUAI AI Scholarship (UAE)",
    host:"UAE", body:"Mohamed bin Zayed University of Artificial Intelligence",
    flag:"🕌", funding:"full",
    levels:["masters","phd"],
    eligible_countries:"all",
    exclusive_to:[],
    fields:"Artificial Intelligence, Machine Learning, Computer Vision, NLP",
    deadline:"Rolling — typically November–April",
    gpa:"minimum GPA of 3.2 out of 4.0",
    age:"No strict age limit",
    language:"English (all programs in English)",
    open_to:"Any nationality with CS/AI/ML background",
    covered:["Full tuition fees","AED 8,000–10,000 per month stipend","Health insurance","Housing support"],
    eligibility:["Any nationality","CS, AI, Data Science, or ML background","Bachelor's degree","Strong academic and research interest in AI","Admitted to MBZUAI"],
    docs:["MBZUAI application","Transcripts","Degree certificate","Two academic references","Research statement","CV / resume","IELTS/TOEFL","Portfolio of projects (if applicable)"],
    tip:"MBZUAI is the world's first university fully dedicated to AI — an extraordinary and rare opportunity for AI researchers. AED 8,000–10,000/month is one of the highest stipends in the world. For any Pakistani student interested in AI/ML, this is a top-tier destination. Abu Dhabi is safe, modern, and internationally connected.",
    link:"https://www.mbzuai.ac.ae/scholarships"
  },
  {
    id:104, name:"World Bank Graduate Scholarship (JJ/WBGSP)",
    host:"USA / Multiple Countries", body:"World Bank Group",
    flag:"🌐", funding:"full",
    levels:["masters"],
    eligible_countries:"all_developing",
    exclusive_to:[],
    fields:"Development Economics, Public Policy, Agriculture, Health, Education, Environmental Studies",
    deadline:"December–February (check annually)",
    gpa:"Strong academic record (no fixed minimum CGPA)",
    age:"Under 45 years",
    language:"English or French (depends on program)",
    open_to:"Citizens of World Bank member countries in development-related fields — Pakistan eligible",
    covered:["Full tuition at approved partner universities","Living stipend","Round-trip airfare","Medical insurance"],
    eligibility:["Citizen of a World Bank member country","Under 45 years","Employment in a development-related field","Bachelor's degree","Minimum 3 years relevant work experience","Commitment to return to home country","Applying to a World Bank-affiliated partner university"],
    docs:["World Bank WBGSP application","Passport copy","Degree certificates and transcripts","Three recommendation letters","Employment letters (current and past)","Personal statement","TOEFL/IELTS scores","Research proposal"],
    tip:"Highly prestigious — study at a World Bank Group affiliated university (Cambridge, Harvard, LSE, Sciences Po, etc.). Approximately 300 scholarships per year globally. You must have work experience in a development-related field. Pakistan is eligible as a WB member country.",
    link:"https://www.worldbank.org/en/programs/scholarships"
  }
 
];
 
 
let bms = JSON.parse(localStorage.getItem('sp_bm') || '[]');
let filtered = [];
 
function syncCount(){ document.getElementById('bmc').textContent = bms.length; }
syncCount();
 
function openPanel(){ renderPanel(); document.getElementById('panel').classList.add('open'); document.getElementById('ov').classList.add('open'); }
function closePanel(){ document.getElementById('panel').classList.remove('open'); document.getElementById('ov').classList.remove('open'); }
function renderPanel(){
  const el = document.getElementById('plist');
  if(!bms.length){ el.innerHTML='<div class="pempty"><i class="fa-regular fa-bookmark" style="font-size:26px;display:block;margin-bottom:10px;"></i>No saved scholarships yet.<br>Hit the bookmark icon on any card to save it here.</div>'; return; }
  el.innerHTML = bms.map((b,i)=>`<div class="pitem"><div class="pitem-name">${b.n}</div><div class="pitem-meta">${b.h} · ${b.f}</div><button class="premove" onclick="removeBm(${i})"><i class="fa-solid fa-xmark"></i></button></div>`).join('');
}
function toggleBm(i){
  const s = filtered[i]; if(!s) return;
  const k = s.id+'';
  const ex = bms.findIndex(b=>b.k===k);
  if(ex>-1){ bms.splice(ex,1); } else { bms.push({k,n:s.name,h:s.host,f:s.funding==='full'?'Fully Funded':'Partially Funded'}); }
  localStorage.setItem('sp_bm',JSON.stringify(bms));
  syncCount();
  const btn=document.getElementById('bm'+i);
  const card=document.getElementById('sc'+i);
  const on=ex===-1;
  if(btn){ btn.classList.toggle('on',on); btn.innerHTML=`<i class="fa-${on?'solid':'regular'} fa-bookmark"></i>`; }
  if(card) card.classList.toggle('saved',on);
}
function removeBm(i){ bms.splice(i,1); localStorage.setItem('sp_bm',JSON.stringify(bms)); syncCount(); renderPanel(); }
function isBm(s){ return bms.some(b=>b.k===s.id+''); }
 
const LEVELS_LABEL = {hs:'High School',intermediate:'Intermediate / A-Levels',undergrad:"Undergraduate (Bachelor's)",masters:"Master's / MS / MBA",phd:'PhD / Doctoral'};
 
// country eligibility logic
const COUNTRY_GROUPS = {
  all: ()=>true,
  all_developing: (c)=>!['usa','uk','germany','france','australia','canada','sweden','norway','denmark','finland','netherlands','switzerland','austria','belgium','ireland','newzealand','singapore','japan','southkorea'].includes(c),
  all: ()=>true,
  pakistan_only: (c)=>c==='pakistan',
  commonwealth: (c)=>['pakistan','india','bangladesh','srilanka','nigeria','kenya','ghana','tanzania','uganda','rwanda','zambia','zimbabwe','cameroon','mozambique','senegal','ethiopia','papua','fiji','samoa','malaysia','srilanka','nepal'].includes(c),
  jica_partner: (c)=>!['usa','uk','germany','france','australia','canada','sweden','norway','denmark','finland'].includes(c),
  adb_member: (c)=>['pakistan','india','bangladesh','nepal','srilanka','afghanistan','indonesia','philippines','vietnam','myanmar','cambodia','laos','uzbekistan','kazakhstan','tajikistan','kyrgyzstan','mongolia','papua','fiji','samoa','georgia','armenia','azerbaijan'].includes(c),
  asian_developing: (c)=>['pakistan','india','bangladesh','nepal','srilanka','afghanistan','indonesia','philippines','vietnam','myanmar','cambodia','laos','uzbekistan','tajikistan','kyrgyzstan','mongolia'].includes(c),
  selected_developing: ()=>true,
  all_partner: ()=>true,
  vlir_eligible: (c)=>['pakistan','india','bangladesh','nepal','srilanka','indonesia','philippines','vietnam','myanmar','cambodia','nigeria','kenya','ghana','ethiopia','tanzania','uganda','senegal','cameroon','mozambique','rwanda','zimbabwe','zambia','egypt','morocco','jordan','peru','ecuador','bolivia','colombia','brazil','haiti','honduras'].includes(c),
  ots_eligible: (c)=>['indonesia','india','vietnam','mexico','thailand','china','brazil','colombia','peru'].includes(c),
  asean_and_selected: (c)=>['indonesia','philippines','vietnam','myanmar','cambodia','laos','thailand','pakistan','india','bangladesh','nepal','srilanka'].includes(c),
  nuffic_eligible: ()=>true,
};
 
function countryMatches(s, home){
  if(!home) return true;
  if(s.exclusive_to.length && !s.exclusive_to.includes(home)) return false;
  const fn = COUNTRY_GROUPS[s.eligible_countries] || (()=>true);
  return fn(home);
}
 
function filterAndRender(){
  document.getElementById('intro').style.display='none';
  const edu = document.getElementById('f-edu').value;
  const home = document.getElementById('f-home').value;
  const field = document.getElementById('f-field').value;
  const fund = document.getElementById('f-fund').value;
 
  filtered = DB.filter(s=>{
    if(edu && !s.levels.includes(edu)) return false;
    if(fund && s.funding!==fund) return false;
    if(!countryMatches(s,home)) return false;
    if(field){
      const f = s.fields.toLowerCase();
      // "All Fields" scholarships always match any field selection
      if(f.includes('all fields')) return true;
      // keyword map for each filter value
      const FIELD_KEYWORDS = {
        cs:['computer','it ','information technology','computing','software','data science','artificial intelligence','machine learning'],
        software:['software','computer','computing','it ','information technology'],
        data:['data science','artificial intelligence','machine learning','ai','big data','analytics','statistics'],
        cyber:['cyber','security','information security','network security'],
        electronics:['electronics','telecommunication','electrical','communication engineering','signal'],
        math:['math','statistics','quantitative'],
        civil:['civil','construction','structural','infrastructure','urban engineering'],
        mechanical:['mechanical','mechatronics','manufacturing','automotive'],
        electrical:['electrical','electronics','power','energy engineering'],
        chemical:['chemical','chemistry','petrochemical','materials'],
        aerospace:['aerospace','aviation','aeronautical','space engineering'],
        industrial:['industrial','production','systems engineering'],
        biomedeng:['biomedical','medical engineering','clinical engineering'],
        environmental_eng:['environmental engineering','green engineering'],
        petroleum:['petroleum','oil','gas','energy','mining'],
        physics:['physics','astrophysics','nuclear'],
        chemistry:['chemistry','chemical','biochemistry'],
        biology:['biology','life science','microbiology','zoology','botany','ecology'],
        biotech:['biotechnology','genetics','genomics','molecular biology','biotech'],
        enviro:['environmental science','ecology','conservation','sustainability','climate'],
        earth:['geology','geoscience','earth science','geography','oceanography'],
        nano:['nanotechnology','materials science','nanoscience'],
        astronomy:['astronomy','astrophysics','space science','cosmology'],
        medicine:['medicine','mbbs','clinical','surgery','medical','physician','healthcare','doctor'],
        pharmacy:['pharmacy','pharmaceutical','drug','pharmacology'],
        nursing:['nursing','midwifery','nurse'],
        dentistry:['dentistry','dental','oral health'],
        pubhealth:['public health','epidemiology','global health','community health','health policy'],
        nutrition:['nutrition','dietetics','food','dietitian'],
        veterinary:['veterinary','animal health','animal science'],
        law:['law','legal','jurisprudence','justice'],
        politics:['political','international relations','diplomacy','governance','public policy','ir '],
        economics:['economics','econom'],
        sociology:['sociology','anthropology','social science'],
        psychology:['psychology','counselling','mental health','behavioral'],
        history:['history','archaeology','heritage'],
        philosophy:['philosophy','ethics'],
        geography:['geography','urban planning','cartography','regional planning'],
        linguistics:['linguistics','language','translation','interpreting'],
        literature:['literature','literary','cultural studies','english studies'],
        religious:['religious','islamic','theology','divinity','quran'],
        gender:['gender','women','feminist'],
        journalism:['journalism','media','news','broadcasting'],
        communication:['communication','public relations','advertising','media'],
        finearts:['fine arts','visual arts','painting','sculpture','graphic arts'],
        design:['design','graphic','ux','ui','product design','industrial design'],
        architecture:['architecture','architectural','interior design','landscape'],
        film:['film','theatre','cinema','performing arts','drama','dance'],
        music:['music','musicology','composition'],
        fashion:['fashion','textile','clothing design'],
        business:['business','management','administration','mba','commerce'],
        finance:['finance','banking','accounting','audit','economics'],
        marketing:['marketing','advertising','branding','market research'],
        entrepreneurship:['entrepreneur','innovation','startup','venture'],
        hr:['human resources','hr','organizational','personnel'],
        logistics:['supply chain','logistics','trade','procurement','operations management'],
        pubadmin:['public administration','governance','policy','civil service'],
        tourism:['tourism','hospitality','hotel','travel management'],
        education:['education','teaching','pedagogy','curriculum','instructional'],
        earlychild:['early childhood','primary education','kindergarten'],
        socialwork:['social work','community development','social welfare'],
        sports:['sports','physical education','exercise','kinesiology'],
        agriculture:['agriculture','agronomy','crop','farming','agriscience'],
        foodscience:['food science','food technology','food safety','agri-food'],
        water:['water management','irrigation','hydrology','water resources'],
        forestry:['forestry','forest management','natural resource','wildlife'],
        fisheries:['fisheries','aquaculture','marine science','fish'],
        climatechange:['climate change','sustainability','renewable energy','clean energy','carbon'],
        development:['development studies','international development','poverty','aid','development economics'],
        peace:['peace','conflict resolution','peacebuilding','conflict studies','reconciliation'],
        humanrights:['human rights','humanitarian','refugee','asylum','protection'],
        pubpolicy:['public policy','policy analysis','governance','administration'],
        migration:['migration','refugee','diaspora','immigration','displacement'],
      };
      const keywords = FIELD_KEYWORDS[field] || [];
      if(!keywords.some(kw => f.includes(kw))) return false;
    }
    return true;
  });
 
  renderResults(edu,home,field,fund);
}
 
function renderResults(edu,home,field,fund){
  const res = document.getElementById('results');
  if(!filtered.length){
    res.innerHTML=`<div class="no-results"><i class="fa-solid fa-search"></i><p>No scholarships match your filters. Try removing a filter — for example, include both funded types or broaden your education level.</p></div>`;
    return;
  }
  const fieldLabels = {all:'All Fields',stem:'STEM',engineering:'Engineering',science:'Science & Tech',medicine:'Medicine',business:'Business',social:'Social Sciences',agriculture:'Agriculture',development:'Development',arts:'Arts & Humanities',peace:'Peace Studies'};
  const tag = [edu?LEVELS_LABEL[edu]:'',home?'from '+home.charAt(0).toUpperCase()+home.slice(1):'',field&&field!=='all'?fieldLabels[field]:'',fund==='full'?'Fully Funded':fund==='partial'?'Partially Funded':''].filter(Boolean).join(' · ');
  res.innerHTML=`<div class="top-bar">
    <div class="rcount"><strong>${filtered.length} scholarships</strong> found ${tag?'— '+tag:''}</div>
    <select class="sort-sel" onchange="sortResults(this.value)">
      <option value="def">Default</option>
      <option value="az">Name A–Z</option>
      <option value="deadline">Deadline (Soonest First)</option>
      <option value="full">Fully Funded First</option>
      <option value="excl">Country-Specific First</option>
    </select>
  </div>
  <div id="clist">${filtered.map((s,i)=>card(s,i)).join('')}</div>`;
}
 
function card(s,i){
  const bm=isBm(s);
  return `<div class="sc${bm?' saved':''}" id="sc${i}">
    <div class="ch" onclick="tog(${i},${s.docs.length})">
      <div class="cflag">${s.flag}</div>
      <div class="cinfo">
        <div class="ctoprow">
          <div class="cname">${s.name}</div>
          <div class="cactions">
            ${s.exclusive_to.length?'<span class="tag tb" style="font-size:10px;">Country-Specific</span>':'<span class="tag tgr" style="font-size:10px;">Open Globally</span>'}
            <button class="bmb${bm?' on':''}" id="bm${i}" onclick="event.stopPropagation();toggleBm(${i})" title="Save"><i class="fa-${bm?'solid':'regular'} fa-bookmark"></i></button>
          </div>
        </div>
        <div class="cmeta">
          <span><i class="fa-solid fa-location-dot" style="font-size:10px;"></i> ${s.host}</span>
          <span><i class="fa-solid fa-building-columns" style="font-size:10px;"></i> ${s.body}</span>
          <span><i class="fa-solid fa-book-open" style="font-size:10px;"></i> ${s.fields}</span>
          <span><i class="fa-solid fa-layer-group" style="font-size:10px;"></i> ${s.levels.map(l=>LEVELS_LABEL[l]).join(', ')}</span>
        </div>
        <div class="tagrow">
          <span class="tag ${s.funding==='full'?'tg':'ta'}">${s.funding==='full'?'Fully Funded':'Partially Funded'}</span>
          ${s.covered.slice(0,3).map(c=>`<span class="tag tgr">${c}</span>`).join('')}
        </div>
        <div class="cfooter">
          <div class="dl"><i class="fa-regular fa-calendar" style="font-size:11px;"></i> ${s.deadline}</div>
          <div class="exprow"><i class="fa-solid fa-chevron-down chev" id="chev${i}"></i> Full details & documents</div>
        </div>
      </div>
    </div>
    <div class="cb" id="cb${i}">
      <div class="tiles">
        <div class="tile"><div class="tile-lbl">GPA / Grade</div><div class="tile-val">${s.gpa}</div></div>
        <div class="tile"><div class="tile-lbl">Age Limit</div><div class="tile-val">${s.age}</div></div>
        <div class="tile"><div class="tile-lbl">Language</div><div class="tile-val">${s.language}</div></div>
      </div>
      <p style="font-size:13.5px;color:#4a4a4a;line-height:1.65;margin-bottom:18px;">Open to: <strong>${s.open_to}</strong></p>
      <div class="bgrid">
        <div class="bblock">
          <h4><i class="fa-solid fa-circle-check" style="color:#7ecba1;font-size:9px;"></i> What's Covered</h4>
          <ul class="blist">${s.covered.map(c=>`<li><span class="dot"></span>${c}</li>`).join('')}</ul>
        </div>
        <div class="bblock">
          <h4><i class="fa-solid fa-user-check" style="color:#7ecba1;font-size:9px;"></i> Eligibility Requirements</h4>
          <ul class="blist">${s.eligibility.map(e=>`<li><span class="dot"></span>${e}</li>`).join('')}</ul>
        </div>
      </div>
      <div class="docsec">
        <h4><i class="fa-solid fa-folder-open" style="color:#c8a060;font-size:9px;"></i> Documents Checklist &nbsp;<span style="font-size:10px;color:#b0a080;letter-spacing:0;text-transform:none;font-weight:400;">tick off as you prepare each one</span></h4>
        <div class="docgrid" id="dg${i}">${s.docs.map((d,di)=>`
          <div class="docitem" id="di${i}_${di}">
            <input type="checkbox" id="dc${i}_${di}" onchange="tick(${i},${di},${s.docs.length})">
            <label for="dc${i}_${di}">${d}</label>
          </div>`).join('')}
        </div>
        <div class="prog-wrap">
          <div class="prog-bar"><div class="prog-fill" id="pf${i}" style="width:0%"></div></div>
          <span class="prog-txt" id="pt${i}">0 / ${s.docs.length} ready</span>
        </div>
      </div>
      <div class="tip-box"><strong>💡 Application Tip:</strong> ${s.tip}</div>
      <div class="apply-row">
        <p class="note"><i class="fa-solid fa-triangle-exclamation" style="font-size:10px;color:#c8a060;margin-right:4px;"></i>Always verify deadlines and requirements at the official website before applying.</p>
        <div class="btn-row">
          <button class="copy-btn" onclick="copyLnk('${s.name.replace(/'/g,"\\'")}','${s.link}')"><i class="fa-regular fa-copy" style="font-size:12px;"></i> Copy Link</button>
          <a href="${s.link}" target="_blank" class="apply-btn">Apply Now <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:11px;"></i></a>
        </div>
      </div>
    </div>
  </div>`;
}
 
function tog(i,total){
  const cb=document.getElementById('cb'+i);
  const ch=document.getElementById('chev'+i);
  cb.classList.toggle('open');
  if(ch) ch.classList.toggle("open",cb.classList.contains("open"));
  if(cb.classList.contains("open") && total) restoreChecks(i,total);
}
function tick(ci,di,total){
  const item=document.getElementById(`di${ci}_${di}`);
  const cb=document.getElementById(`dc${ci}_${di}`);
  item.classList.toggle("done",cb.checked);
  const grid=document.getElementById("dg"+ci);
  const checked=grid.querySelectorAll("input:checked").length;
  const pf=document.getElementById("pf"+ci);
  const pt=document.getElementById("pt"+ci);
  if(pf) pf.style.width=Math.round(checked/total*100)+"%";
  if(pt) pt.textContent=checked+" / "+total+" ready";
  const key="sp_docs_"+ci;
  const saved=JSON.parse(localStorage.getItem(key)||"[]");
  if(cb.checked){ if(!saved.includes(di)) saved.push(di); }
  else { const idx=saved.indexOf(di); if(idx>-1) saved.splice(idx,1); }
  localStorage.setItem(key,JSON.stringify(saved));
}
function restoreChecks(i,total){
  const key="sp_docs_"+i;
  const saved=JSON.parse(localStorage.getItem(key)||"[]");
  if(!saved.length) return;
  saved.forEach(di=>{
    const cb=document.getElementById(`dc${i}_${di}`);
    const item=document.getElementById(`di${i}_${di}`);
    if(cb){ cb.checked=true; if(item) item.classList.add("done"); }
  });
  const pf=document.getElementById("pf"+i);
  const pt=document.getElementById("pt"+i);
  if(pf) pf.style.width=Math.round(saved.length/total*100)+"%";
  if(pt) pt.textContent=saved.length+" / "+total+" ready";
}
function copyLnk(name,link){
  navigator.clipboard.writeText(name+'\n'+link).then(()=>{
    const btns=document.querySelectorAll('.copy-btn');
    btns.forEach(b=>{if(b.textContent.includes('Copy'))b.innerHTML='<i class="fa-solid fa-check" style="font-size:12px;"></i> Copied';});
    setTimeout(()=>{btns.forEach(b=>{if(b.textContent.includes('Copied'))b.innerHTML='<i class="fa-regular fa-copy" style="font-size:12px;"></i> Copy Link';});},2000);
  });
}
function sortResults(v){
  if(v==='az') filtered.sort((a,b)=>a.name.localeCompare(b.name));
  else if(v==='full') filtered.sort((a,b)=>a.funding==='full'?-1:1);
  else if(v==='excl') filtered.sort((a,b)=>a.exclusive_to.length?-1:1);
  else if(v==='deadline'){
    // Sort by deadline - prioritize specific dates over vague ones
    filtered.sort((a,b)=>{
      const extractMonth = (d) => {
        const months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
        const dLower = d.toLowerCase();
        for(let i=0; i<months.length; i++){
          if(dLower.includes(months[i])) return i;
        }
        return 12; // No specific month = push to end
      };
      return extractMonth(a.deadline) - extractMonth(b.deadline);
    });
  }
  const cl=document.getElementById('clist');
  if(cl) cl.innerHTML=filtered.map((s,i)=>card(s,i)).join('');
}
function qs(edu,home,fund,field){
  document.getElementById('f-edu').value=edu;
  document.getElementById('f-home').value=home;
  document.getElementById('f-fund').value=fund;
  if(field) document.getElementById('f-field').value=field;
  filterAndRender();
}
 
// Panel management functions
function openPanel(){
  document.getElementById('panel').classList.add('open');
  document.getElementById('ov').classList.add('open');
  renderPanel();
}
function closePanel(){
  document.getElementById('panel').classList.remove('open');
  document.getElementById('ov').classList.remove('open');
}
function openSubmitPanel(){
  document.getElementById('submit-panel').classList.add('open');
  document.getElementById('ov').classList.add('open');
}
function closeSubmitPanel(){
  document.getElementById('submit-panel').classList.remove('open');
  document.getElementById('ov').classList.remove('open');
}
function closeAllPanels(){
  closePanel();
  closeSubmitPanel();
}
 
// Form submission handler
async function handleSubmitScholarship(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submit-btn');
  const successMsg = document.getElementById('success-msg');
 
  const formData = new FormData(form);
  const data = {};
  formData.forEach((value, key) => { data[key] = value; });
 
  const { error } = await supabaseClient.from('submitted_scholarships').insert([{
    name: data.name,
    country: data.country,
    level: data.level,
    field: data.field,
    funding: data.funding,
    deadline: data.deadline,
    link: data.link,
    details: data.details,
    email: data.email,
    approved: false
  }]);
 
  if (error) {
    console.error(error);
  }
 
  btn.disabled = true;
  form.style.display = 'none';
  successMsg.classList.add('show');
 
  setTimeout(() => {
    form.reset();
    form.style.display = 'block';
    successMsg.classList.remove('show');
    btn.disabled = false;
  }, 5000);
}
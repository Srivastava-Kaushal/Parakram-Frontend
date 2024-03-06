const teams = [
  {
    name:"Hemanth Reddy",
    position:"President, Students' Gymkhana",
    team: "",
    image:"https://res.cloudinary.com/dzmrngj31/image/upload/v1709715401/hemant_reddy_nrbuad.jpg"
  },
  {
    name: "Valluri Agasthya",
    position: "Coordinator",
    team: "",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708957249/Agasthya_gjvty7.jpg",
  },
  {
    name: "Bhupender Ghosliya ",
    position: "Co-Coordinator",
    team: "",
    image: "",
  },
  {
    name: "Yash Murarka ",
    position: "Co-Coordinator",
    team: "",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709409883/Yash_Murarka_CC_jqg4g5.jpg",
  },
  {
    name: "Kapil Yadav ",
    position: "Head",
    team: "Event Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708076729/img1_ci3xgr.jpg",
  },
  {
    name: "SVSN Naidu ",
    position: "Head",
    team: "Event Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708970713/naidu_event_xhfizs.jpg",
  },
  {
    name: "Akarapu Bhageerath ",
    position: "Head",
    team: "Event Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708076780/Bhageerath_Event_lln1o9.webp",
  },
  {
    name: "Karthik Sri Ram Kumar ",
    position: "Head",
    team: "Event Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708076866/Gugulothu_Karthik_Event_Head_tjpylm.jpg",
  },
  {
    name: "Guna Charan ",
    position: "Head",
    team: "Hospitality Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708076925/Charan_Hospitality_qoqulu.jpg",
  },
  {
    name: "Karri Sumanth Kumar ",
    position: "Head",
    team: "Hospitality Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708076993/Sumanth_Kumar_Hospitality_cwbwru.jpg",
  },
  {
    name: "Kushal Sharma ",
    position: "Head",
    team: "Hospitality Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708246039/kushal_Hospitality_l4g0ed.jpg",
  },
  {
    name: "Sambhrant Dora",
    position: "Head",
    team: "Hospitality Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709453254/Sambhrant_Dora_Hospitality_team_vcb6e6.jpg",
  },
  {
    name: "VLD Devi",
    position: "Head",
    team: "Hospitality Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709057806/Devi_hospitality_hooh6h.jpg",
  },
  {
    name: "Ganesula Yeshwanth",
    position: "Head",
    team: "Sponsorship and Alumini Connect Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077093/Yashwanth_Ganeshula_Sponsorship_lufkff.jpg",
  },
  {
    name: "Harsha Agarwal",
    position: "Head",
    team: "Sponsorship and Alumini Connect Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709453305/Harsha_agrawal_sponsorship_head_mfk5ve.jpg",
  },
  {
    name: "T Raghu Vamshi Reddy",
    position: "Head",
    team: "Finance Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077199/Raghu_Vamshi_Finance_tojzig.jpg",
  },
  {
    name: "Vishnu Teja",
    position: "Head",
    team: "Operations and Logistics Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077312/Vishnu_Operations_fuezys.jpg",
  },
  {
    name: "Yellapu Jashwanth",
    position: "Head",
    team: "Operations and Logistics Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077391/Jaswanth_Operations_and_Logistics_zi3clu.jpg",
  },
  {
    name: "Abhishek Yadav",
    position: "Head",
    team: "Operations and Logistics Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077468/Abhishek_Yadav_Operation_and_Logistics_Head_cqanqo.jpg",
  },
  {
    name: "Mukul Agarwal",
    position: "Head",
    team: "Promotion and Marketing Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077573/Mukul_Agrawal_Promotions_Head_uxh0nq.jpg",
  },
  {
    name: "Manish Kumar Jha",
    position: "Head",
    team: "Promotion and Marketing Team",
    image:
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708957620/ManishKumarJha_Promotion_Marketing_e6nbng.png",
  },
  {
    name: "T Lakshmi Ganeswar Reddy",
    position: "Head",
    team: "Security Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708246144/Ganesh_Security.jpg_htaxqa.jpg",
  },
  {
    name: "Dhananjay Singh Shekhawat",
    position: "Head",
    team: "Security Team",
    image: "",
  },
  {
    name: "K Vivek",
    position: "Head",
    team: "Content and Documentation Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709453587/K_Vivek_Content_and_documentation_head_uc6bpe.jpg",
  },
  {
    name: "Disha Mewara",
    position: "Head",
    team: "Content and Documentation Team",
    image: 
      "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709409560/Disha_Mewara_content_doc_bnedz2.jpg",
  },
  {
    name: "Shubham Kumar Kurrey",
    position: "Head",
    team: "Design Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077745/Shubham_Kumar_kurrey_design_rgr1zm.png",
  },
  {
    name: "Bugatha Harshith Sai",
    position: "Head",
    team: "Design Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077798/Harshith_design_snspac.png",
  },
  {
    name: "Rounak Raj",
    position: "Head",
    team: "Public Relations Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077824/Rounak_Raj_PR_bsxzkj.jpg",
  },
  {
    name: "Chavali Srinivas",
    position: "Head",
    team: "Public Relations Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077857/Srinivas_PR_kavlvl.jpg",
  },
  {
    name: "Divyansh Sharma",
    position: "Head",
    team: "Public Relations Team",
    image:
     "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709453798/DivyanshSharma_Pr_Team_jtmw0m.jpg",
  },
  {
    name: "R S N Sasmith",
    position: "Head",
    team: "Technical and Support Team",
    image:
     "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1709453418/Sasmith_Reddy_Tech_team_pqvsqy.jpg",
  },
  {
    name: "Pulipati Sai Nikhil",
    position: "Head",
    team: "Technical and Support Team",
    image: "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708970968/nikhil_tech_lrpxin.jpg",
  },
  {
    name: "Chirag Gajana",
    position: "Head",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077947/Chirag_Gajana_Tech_team_ndrhty.jpg",
  },
  {
    name: "Teella Roop Sagar",
    position: "Head",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708077982/Roop_Sagar_Teella_Tech_Team_pq3hlw.jpg",
  },
  {
    name: "Raghvan Pareek",
    position: "Supervisor",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708078107/raghvanpareek_mzntbu.jpg",
  },
  {
    name: "Drethi Manish Kapila",
    position: "Supervisor",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708078208/WipeOut23_04_2023_012346.021000_cnlty4.jpg",
  },
  {
    name: "Maniben Rathod",
    position: "Supervisor",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708078109/manibenrathod_tech_s038db.jpg",
  },
  {
    name: "Kaushal Kumar Srivastava",
    position: "Supervisor",
    team: "Technical and Support Team",
    image:
      "https://res.cloudinary.com/dhriluafq/image/upload/v1708078162/Kaushal_Kumar_Srivastava_techteam_qlsdlk.jpg",
  },
  {
    name: "Devineni Sri Venkatraya Chowdary",
    position: "Supervisor",
    team: "Technical and Support Team",
    image: "",
  },
  {
    name: "Dharma Raghava Sai Shashank",
    position: "Supervisor",
    team: "Technical and Support Team",
    image: "",
  },
  {
    name: "Pankaj Sharma",
    position: "Supervisor",
    team: "Technical and Support Team",
    image: "",
  },
  //   {
  //     division: "Technical and Support Team",
  //     head: [
  //       {
  //         name: "R S N Sasmith",
  //         image: "",
  //       },
  //       {
  //         name: "Pulipati Sai Nikhil",
  //         image: "",
  //       },
  //       {
  //         name: "Chirag Gajana",
  //         image:
  //           "https://drive.google.com/file/d/16vMRgh_VVvt4BbsukDRd4PrSoRUY_8uw/view?usp=drive_link",
  //       },
  //       {
  //         name: "Teella Roop Sagar",
  //         image:
  //           "https://drive.google.com/file/d/1tmxoTHjWNBL4smWwrqtDQczrkqkSCvT0/view?usp=drive_link",
  //       },
  //     ],
  //     supervisor: [
  //       {
  //         name: "Raghvan Pareek",
  //         image:
  //           "https://drive.google.com/file/d/14x6PynFf6g94USmFlmUpf3CvOqoRxiCk/view?usp=drive_link",
  //       },
  //       {
  //         name: "Drethi Manish Kapila",
  //         image: "",
  //       },
  //       {
  //         name: "Maniben Rathod",
  //         image:
  //           "https://drive.google.com/file/d/13jdn8soTj8Mx646I9u4wsCqtVCFKPRIS/view?usp=drive_link",
  //       },
  //       {
  //         name: "Kaushal Kumar Srivastava",
  //         image:
  //           "https://drive.google.com/file/d/1ZRdwd21S9_OSRKXy6mk9Yi4OBO2zr1O5/view?usp=drive_link",
  //       },
  //       {
  //         name: "Devineni Sri Venkatraya Chowdary",
  //         image: "",
  //       },
  //       {
  //         name: "Dharma Raghava Sai Shashank",
  //         image: "",
  //       },
  //       {
  //         name: "Pankaj Sharma",
  //         image: "",
  //       },
  //     ],
  //     organiser: [
  //       {
  //         name: "Ratul Saha",
  //       },
  //       {
  //         name: "Harsh Singh",
  //       },
  //       {
  //         name: "Prakhar Srivastava",
  //       },
  //       {
  //         name: "Marmick Mathur",
  //       },
  //       {
  //         name: "Yash Sharma",
  //       },
  //       {
  //         name: "Ayush Barman",
  //       },
  //       {
  //         name: "Subham Dey",
  //       },
  //     ],
  //   },
];

export default teams;

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class PortfolioController extends Controller
{
    /**
     * Render the main single-page application.
     */
    public function index()
    {
        return view('app');
    }

    /**
     * Provide comprehensive portfolio data as JSON.
     */
    public function getData(): JsonResponse
    {
        $data = [
            'profile' => [
                'name' => 'Johannes Anugrah Prawira',
                'title' => 'Fresh Graduate Teknik Informatika',
                'specializations' => [
                    'Informatics Engineering Graduate',
                    'Data Science & ML',
                    'IT Trainer & Web Developer'
                ],
                'summary' => 'Lulusan S1 Teknik Informatika Universitas Gunadarma dengan IPK 3.79 / 4.00 (Predikat Sangat Memuaskan). Memiliki fondasi praktis di bidang Data Science, Machine Learning, dan Web Development (Python, PHP, Streamlit, SQL). Berpengalaman sebagai Asisten Laboratorium Fisika Dasar, Pengajar Musik, serta Koordinator Organisasi dalam merancang silabus materi, instructional design, dan kepemimpinan operasional.',
                'about_detailed' => [
                    'Saya adalah lulusan baru (fresh graduate) Teknik Informatika Universitas Gunadarma dengan minat mendalam dan kecakapan teknis dalam Data Science, Machine Learning, dan Web Development.',
                    'Selain keahlian teknis pemrograman dan manajemen database, saya memiliki rekam jejak sebagai pengajar dan pembimbing melalui peran sebagai Asisten Laboratorium Fisika Dasar, Pengajar Musik, serta Koordinator Organisasi. Pengalaman ini mengasah kemampuan saya dalam instructional design, kepemimpinan tim, serta menyederhanakan konsep analitis dan teknis yang kompleks menjadi materi yang mudah dipahami oleh berbagai audiens.',
                    'Saya siap berkontribusi secara produktif dan profesional dalam peran Data Science / Data Analyst, Web Developer, maupun IT Trainer & Product Operations dengan mengintegrasikan ketajaman teknis, empati pengajaran, dan komunikasi kepemimpinan.'
                ],
                'photo' => '/image/profile-web.png',
                'email' => 'johannespraira@gmail.com',
                'phone' => '+62 813-5053-5029',
                'phone_raw' => '081350535029',
                'location' => 'DKI Jakarta & Depok, Indonesia',
                'university' => 'Universitas Gunadarma',
                'degree' => 'Sarjana Komputer (S.Kom) - Teknik Informatika',
                'gpa' => '3.79 / 4.00',
                'haki_number' => '001226719',
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/in/johannes-anugrah-prawira/',
                    'github' => 'https://github.com/johannesap',
                    'whatsapp' => 'https://wa.me/6281350535029',
                    'email' => 'mailto:johannespraira@gmail.com'
                ],
                'cv_files' => [
                    'full' => '/CV_Johannes_Anugrah_Prawira.pdf',
                    'ats' => '/CV_ATS_Johannes_Anugrah_Prawira.pdf'
                ]
            ],
            'statistics' => [
                [
                    'value' => '3.79',
                    'suffix' => '/4.00',
                    'label' => 'IPK Gunadarma',
                    'icon' => 'Award'
                ],
                [
                    'value' => '2+',
                    'suffix' => 'Tahun',
                    'label' => 'Lab & Pengajar',
                    'icon' => 'Users'
                ],
                [
                    'value' => '1',
                    'suffix' => 'HAKI',
                    'label' => 'Hak Cipta Kemenkumham RI',
                    'icon' => 'ShieldCheck'
                ],
                [
                    'value' => '10+',
                    'suffix' => 'Sertifikasi',
                    'label' => 'Pelatihan & IT Skema',
                    'icon' => 'Code'
                ]
            ],
            'experiences' => [
                'work' => [
                    [
                        'id' => 1,
                        'role' => 'Asisten Laboratorium Fisika Dasar',
                        'institution' => 'Laboratorium Fisika Dasar - Universitas Gunadarma',
                        'location' => 'Kota Depok, Jawa Barat',
                        'period' => 'September 2024 - Sekarang',
                        'icon' => 'FlaskConical',
                        'points' => [
                            'Hands-on Training & Mentoring: Merancang dan memimpin sesi pengarahan materi (briefing) sebagai bentuk pelatihan langsung bagi 5-6 mahasiswa per sesi eksperimen, memastikan pemahaman mendalam tentang metodologi ilmiah dan instrumentasi.',
                            'Evaluasi & Pengukuran Pembelajaran: Mengevaluasi dan memberikan penilaian objektif terhadap tes awal, jurnal aktivitas praktikum, hingga laporan akhir mahasiswa untuk mengukur efektivitas transfer ilmu.',
                            'Supervisi Teknis & Keselamatan: Mendampingi mahasiswa selama sesi praktikum laboratorium untuk memastikan kepatuhan prosedur keselamatan dan presisi pengukuran alat eksperimental.'
                        ],
                        'skills' => ['Instructional Design', 'Public Speaking', 'Evaluasi Akademik', 'Supervisi Laboratorium', 'Mentoring']
                    ],
                    [
                        'id' => 2,
                        'role' => 'Pengajar Musik & Accompanist',
                        'institution' => 'Gereja POUK Immanuel Kopassus',
                        'location' => 'Jakarta Timur, DKI Jakarta',
                        'period' => 'April 2023 - Sekarang',
                        'icon' => 'Music',
                        'points' => [
                            'Kurikulum Personalisasi: Merancang kurikulum dan materi pembelajaran musik yang interaktif dan adaptif sesuai usia, bakat, serta target belajar masing-masing siswa.',
                            'Monitoring Perkembangan: Melakukan simulasi praktik rutin dan evaluasi berkala secara terstruktur serta menjaga komunikasi proaktif dengan orang tua peserta didik.',
                            'Musisi Pengiring Profesional: Berperan aktif sebagai pianis/musisi pengiring dalam berbagai pagelaran, kebaktian, dan event formal.'
                        ],
                        'skills' => ['Curriculum Design', 'Komunikasi Interpersonal', 'Edukasi Seni Musik', 'Mentoring Siswa']
                    ]
                ],
                'organization' => [
                    [
                        'id' => 3,
                        'role' => 'Area Coordinator',
                        'institution' => 'UKM Kristen Universitas Gunadarma',
                        'location' => 'Depok & Jakarta',
                        'period' => 'Desember 2025 - Sekarang',
                        'icon' => 'Network',
                        'points' => [
                            'Mengoordinasikan berbagai agenda program kerja dan aktivitas kemahasiswaan di wilayah operasional kampus.',
                            'Memimpin koordinasi divisi lapangan, memastikan instruksi kerja terdistribusi dengan jelas, serta memelihara keselarasan komunikasi antar anggota.'
                        ],
                        'skills' => ['Kepemimpinan Operasional', 'Koordinasi Tim', 'Manajemen Wilayah']
                    ],
                    [
                        'id' => 4,
                        'role' => 'Leader of Youth',
                        'institution' => 'POUK Immanuel Kopassus Cijantung',
                        'location' => 'Jakarta Timur',
                        'period' => 'Februari 2025 - Sekarang',
                        'icon' => 'Flag',
                        'points' => [
                            'Memimpin 11 pengurus aktif dalam merancang, mengawasi, serta mengeksekusi program kerja jangka pendek dan jangka panjang kepemudaan.',
                            'Menginisiasi lokakarya pembinaan karakter, kegiatan sosial, dan penyaluran minat bakat generasi muda.'
                        ],
                        'skills' => ['People Management', 'Strategic Planning', 'Executive Execution']
                    ],
                    [
                        'id' => 5,
                        'role' => 'Music Coordinator',
                        'institution' => 'POUK Immanuel Kopassus Cijantung',
                        'location' => 'Jakarta Timur',
                        'period' => 'Maret 2023 - Sekarang',
                        'icon' => 'Sliders',
                        'points' => [
                            'Memimpin dan membimbing (mentoring) tim pelayanan musik yang terdiri dari para musisi dan penyanyi vokal.',
                            'Mengatur jadwal latihan berkala, mengkurasi dan mengaransemen lagu sesuai tema acara secara konsisten.'
                        ],
                        'skills' => ['Team Mentoring', 'Scheduling & Logistics', 'Music Direction']
                    ]
                ]
            ],
            'projects' => [
                [
                    'id' => 1,
                    'title' => 'Smart E-Test: Sistem Informasi Manajemen Ujian & Nilai SMP Berbasis AI Chatbot',
                    'category' => 'Artificial Intelligence & Web Management',
                    'year' => '2026',
                    'badge' => 'HAKI Resmi Kemenkumham RI (001226719)',
                    'badge_type' => 'haki',
                    'image' => '/image/course/free-1.jpg',
                    'description' => 'Pemegang Hak Cipta resmi bersama tim (No. Pencatatan: 001226719) yang terdaftar di Kementerian Hukum RI. Platform web komprehensif untuk otomatisasi ujian dan pengelolaan nilai siswa sekolah menengah pertama, diperkaya fitur Chatbot AI interaktif guna membantu asistensi belajar siswa.',
                    'tags' => ['Artificial Intelligence', 'NLP Chatbot', 'Web System', 'Database Management', 'HAKI 001226719']
                ],
                [
                    'id' => 2,
                    'title' => 'Klasifikasi Penyakit Diabetes Melitus Menggunakan Logistic Regression & Streamlit',
                    'category' => 'Machine Learning & Data Science',
                    'year' => '2026',
                    'badge' => 'Skripsi S1 Teknik Informatika',
                    'badge_type' => 'thesis',
                    'image' => '/image/course/free-2.jpg',
                    'description' => 'Penelitian skripsi mandiri mengimplementasikan model klasifikasi Machine Learning dengan algoritma Logistic Regression, diintegrasikan ke dalam antarmuka web interaktif berbasis framework Streamlit untuk deteksi dan skrining resiko diabetes melitus pasien secara akurat.',
                    'tags' => ['Python', 'Logistic Regression', 'Streamlit', 'Scikit-Learn', 'Pandas & NumPy']
                ],
                [
                    'id' => 3,
                    'title' => 'Aplikasi Web Berbasis Basis Data Relasional Tingkat Lanjut (MySQL & Oracle 11g)',
                    'category' => 'Fullstack & Database Engineering',
                    'year' => '2023 - 2025',
                    'badge' => 'Sertifikasi LepKom Gunadarma',
                    'badge_type' => 'tech',
                    'image' => '/image/course/free-3.jpg',
                    'description' => 'Pengembangan aplikasi web terintegrasi basis data relasional kompleks yang menerapkan DDL, DML, Sub-Queries, Views, dan Explicit Cursors pada Oracle 11g, dilengkapi manajemen hak akses user dan antarmuka web modern yang responsif.',
                    'tags' => ['PHP', 'MySQL', 'Oracle 11g', 'HTML5/CSS3', 'Bootstrap & Tailwind']
                ]
            ],
            'education' => [
                [
                    'school' => 'Universitas Gunadarma',
                    'degree' => 'S1 Teknik Informatika (Fakultas Teknologi Industri)',
                    'period' => '2022 - 2026',
                    'score_label' => 'IPK Kelulusan',
                    'score' => '3.79 / 4.00',
                    'logo' => '/image/course/Gundar.png',
                    'description' => 'Lulus dengan predikat Sangat Memuaskan. Menyelesaikan skripsi di bidang Machine Learning klasifikasi penyakit diabetes melitus menggunakan model Logistic Regression dan web framework Streamlit.'
                ],
                [
                    'school' => 'SMA Katolik Ignatius Slamet Riyadi Cijantung',
                    'degree' => 'Sekolah Menengah Atas (MIPA)',
                    'period' => '2019 - 2022',
                    'score_label' => 'Rata-rata Nilai',
                    'score' => '8.5 / 10',
                    'logo' => '/image/course/SMA.jpg',
                    'description' => 'Fokus pada rumpun ilmu sains dan matematika, aktif dalam kepanitiaan dan pengembangan kepemimpinan siswa.'
                ],
                [
                    'school' => 'SMP Negeri 103 Jakarta',
                    'degree' => 'Sekolah Menengah Pertama',
                    'period' => '2016 - 2019',
                    'score_label' => 'Rata-rata Nilai',
                    'score' => '8.3 / 10',
                    'logo' => '/image/course/SMP.png',
                    'description' => 'Membangun dasar logika sains dan ketertarikan awal pada teknologi informasi dan pemrograman komputer.'
                ],
                [
                    'school' => 'SD Negeri Baru 07 Pagi',
                    'degree' => 'Sekolah Dasar',
                    'period' => '2010 - 2016',
                    'score_label' => 'Rata-rata Nilai',
                    'score' => '8.8 / 10',
                    'logo' => '/image/course/SD.jpg',
                    'description' => 'Menyelesaikan pendidikan dasar dengan prestasi akademik yang unggul secara konsisten.'
                ]
            ],
            'skills' => [
                [
                    'category' => 'Data Science & ML',
                    'icon' => 'BrainCircuit',
                    'skills' => [
                        'Python', 'Machine Learning', 'Logistic Regression', 'Scikit-Learn',
                        'Streamlit', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Preprocessing'
                    ]
                ],
                [
                    'category' => 'Web & Software Dev',
                    'icon' => 'Code2',
                    'skills' => [
                        'PHP', 'Laravel', 'React.js', 'Tailwind CSS', 'JavaScript (ES6+)',
                        'HTML5 & CSS3', 'Bootstrap', 'C# & OOP', 'RESTful API'
                    ]
                ],
                [
                    'category' => 'Database & Tools',
                    'icon' => 'Database',
                    'skills' => [
                        'MySQL', 'SQL Server', 'Oracle 11g', 'DDL & DML',
                        'Explicit Cursors', 'Git & GitHub', 'Figma (UI/UX)', 'VS Code'
                    ]
                ],
                [
                    'category' => 'Leadership & Training',
                    'icon' => 'GraduationCap',
                    'skills' => [
                        'Instructional Design', 'Public Speaking', 'Mentoring Mahasiswa',
                        'Leadership', 'Team Building', 'Penalaran Logika & Analitis', 'Time Management'
                    ]
                ]
            ],
            'certifications' => [
                [
                    'title' => 'Pemrograman Web, Rekayasa Perangkat Lunak & Jaringan Komputer',
                    'issuer' => 'Laboratorium Komputer (LepKom) Universitas Gunadarma',
                    'period' => 'Feb 2023 - Sep 2025',
                    'badge' => 'Junior Web Programmer',
                    'description' => 'Menyelesaikan skema pelatihan menyeluruh mencakup HTML5/CSS, OOP C#, pembuatan aplikasi web dinamis, serta arsitektur jaringan TCP/IP dan konfigurasi LAN nirkabel.'
                ],
                [
                    'title' => 'Manajemen Basis Data Relasional (MySQL & Oracle 11g)',
                    'issuer' => 'Laboratorium Komputer (LepKom) Universitas Gunadarma',
                    'period' => 'Agu 2023 - Agu 2025',
                    'badge' => 'Database Management',
                    'description' => 'Praktek perancangan database relasional, DDL/DML, administrasi user, Sub Queries kompleks, serta pemrograman Explicit Cursors pada platform Oracle 11g.'
                ],
                [
                    'title' => 'Komunikasi & Bahasa Inggris (Speaking & Writing)',
                    'issuer' => 'Mr. BOB English Camp Pare, Kediri',
                    'period' => 'Lembaga Bahasa Pare',
                    'badge' => 'Grade A (Sangat Memuaskan)',
                    'description' => 'Lulus predikat Grade A pada program Speaking & Writing, Tic Talk, dan Speak Up 1 untuk pengasahan public speaking dan komunikasi aktif bahasa Inggris.'
                ],
                [
                    'title' => 'The Therapy I English Fluency & Listening Comprehension',
                    'issuer' => 'ELFAST English Course, Pare',
                    'period' => 'Lembaga Bahasa Pare',
                    'badge' => 'Grade B+ • Fluency',
                    'description' => 'Menyelesaikan pelatihan intensif kefasihan bertutur kata bahasa Inggris spontan dan kepekaan pemahaman audio listening.'
                ],
                [
                    'title' => 'Aptitude Test: Berpikir Abstrak & Penalaran Logika',
                    'issuer' => 'Universitas Gunadarma',
                    'period' => 'April 2026',
                    'badge' => 'Kategori Tinggi (K3)',
                    'description' => 'Meraih skor kategori tinggi (K3) dalam uji psikometri logika dan penalaran abstrak, mencerminkan kemampuan analitis tajam dalam memecahkan masalah kompleks.'
                ],
                [
                    'title' => 'Hak Cipta (HAKI) Resmi Program Komputer Smart E-Test',
                    'issuer' => 'Kementerian Hukum Republik Indonesia',
                    'period' => '2026',
                    'badge' => 'Pencatatan No. 001226719',
                    'description' => 'Surat Pencatatan Ciptaan resmi untuk karya sistem informasi manajemen pengelolaan nilai dan ujian SMP berbasis AI dengan fitur Chatbot.'
                ]
            ]
        ];

        return response()->json($data);
    }
}

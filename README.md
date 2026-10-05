<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
# Portofolio Johannes Anugrah Prawira

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>
> Portofolio profesional modern berbasis **React**, **Tailwind CSS**, dan **Laravel Backend (API & SQLite Database)**.

## About Laravel

---

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

## 🚀 Teknologi yang Digunakan

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).
- **Frontend**:
    - **React 18 / 19** (Functional Components, Hooks, State Management)
    - **Tailwind CSS v4** (Modern utility-first styling, responsive breakpoints, custom theme)
    - **Vite 7** (Lightning-fast build tool & HMR)
    - **Font Awesome 6.5.2** & **Google Fonts** (Oswald, Anton, Inter)
- **Backend**:
    - **Laravel 12 / PHP 8.2+** (RESTful API & Single Page Application Serving)
    - **SQLite Database** (Tersedia migrasi tabel `contact_messages` untuk formulir pesan langsung)
    - **Eloquent ORM & API Controller** (`PortfolioController` & `ContactController`)

## Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

## 📁 Struktur Direktori Utama

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

```text
├── app/
│   ├── Http/Controllers/
│   │   ├── PortfolioController.php   # Endpoint GET /api/portfolio & view renderer
│   │   └── ContactController.php     # Endpoint POST /api/contact & validator
│   └── Models/
│       └── ContactMessage.php        # Model Eloquent untuk pesan kontak
├── database/
│   ├── migrations/                   # Skema tabel database (termasuk contact_messages)
│   └── database.sqlite               # Database SQLite lokal
├── public/
│   ├── build/                        # Hasil kompilasi Vite (React + Tailwind CSS)
│   ├── image/                        # Aset foto profil, logo, dan gambar proyek
│   ├── CV_Johannes_Anugrah_Prawira.pdf
│   └── CV_ATS_Johannes_Anugrah_Prawira.pdf
├── resources/
│   ├── css/
│   │   └── app.css                   # Konfigurasi Tailwind CSS v4
│   ├── js/
│   │   ├── components/               # Komponen React (Navbar, Hero, Stats, About, dll)
│   │   ├── data/
│   │   │   └── portfolioData.js      # Initial & fallback state portofolio
│   │   ├── App.jsx                   # Komponen utama React
│   │   └── main.jsx                  # Entrypoint mounting React ke #app
│   └── views/
│       └── app.blade.php             # Shell Blade utama pembungkus React
├── routes/
│   ├── api.php                       # Definisi rute API (/api/portfolio, /api/contact)
│   └── web.php                       # Definisi rute web utama
├── vite.config.js                    # Konfigurasi Vite dengan plugin Laravel, React & Tailwind
└── package.json
```

## If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

## 🛠️ Cara Menjalankan Aplikasi

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### 1. Prasyarat

- **PHP** >= 8.2
- **Composer** >= 2.0
- **Node.js** >= 18.x & **npm**

### Premium Partners

### 2. Menjalankan Server Backend Laravel

Buka terminal di direktori proyek ini:

```bash
php artisan serve
```

Server Laravel akan aktif secara default di `http://127.0.0.1:8000`.

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

### 3. Menjalankan Frontend React & Tailwind (Mode Development)

Buka terminal terpisah untuk hot-module replacement (HMR):

```bash
npm run dev
```

## Contributing

### 4. Build untuk Production

Jika ingin melakukan build aset statis React & Tailwind secara permanen:

```bash
npm run build
```

Setelah di-build, Anda cukup menjalankan `php artisan serve` dan aplikasi langsung berjalan penuh dengan aset terkompilasi di `public/build/`.

## Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

## 📡 Rute API Tersedia

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Menampilkan Single Page Application React |
| `GET` | `/api/portfolio` | Mengambil seluruh data portofolio JSON (Profil, Pengalaman, Proyek, Sertifikasi, dll) |
| `POST` | `/api/contact` | Mengirim pesan kontak (divalidasi dan disimpan ke database SQLite) |

## Security Vulnerabilities

---

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## 👤 Informasi Pemilik Portofolio

- **Nama**: Johannes Anugrah Prawira, S.Kom.
- **Pendidikan**: S1 Teknik Informatika, Universitas Gunadarma (IPK 3.79 / 4.00)
- **Email**: johannespraira@gmail.com
- **WhatsApp**: +62 813-5053-5029
- **LinkedIn**: [johannes-anugrah-prawira](https://www.linkedin.com/in/johannes-anugrah-prawira/)
- **GitHub**: [github.com/johannesap](https://github.com/johannesap)

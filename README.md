[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.drupal.org/files/project-images/rain-drop-hi.png">
    <img src="https://www.drupal.org/files/project-images/rain-drop-hi.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">RESTful API</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![picture alt](https://github.com/kayisshal/191524047_3B_Kayis-Shalahuddin/images/screenshot.png "Title")

Tugas pembuatan RESTful API ini menggunakan Node JS sebagai Back-End dan Vue JS sebagai Front-End yang telah ditugaskan pada mata kuliah Pengembangan Web kelas D4-3B di Jurusan Teknik Informatika POLBAN

Keuntungan penggunaan:
* Dapat melakukan CRUD pada tabel Aktor
* Mempunyai dual theme dengan default : Dark
* Selamat Menggunakan :smile:

Terimakasih kepada Contributor dan pihak2 eksternal karena telah membantu dan menyelesaikan Jobdesk masing-masing, semoga ilmu yang di dapat akan bermanfaat dikemudian hari kelak.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Pembuatan program ini menggunakan teknologi sebagai berikut:

* [Vue.js](https://vuejs.org/)
* [Node.js](https://nodejs.org/en/about/)
* [Vuetify](https://vuetifyjs.com/en/)
* [PostgreSQL](https://www.postgresql.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Berikut beberapa tahap untuk menjalankan secara lokal.

### Prerequisites

Berikut software yang dibutuhkan untuk menjalankan program
* Windows/IOS
* Web Browser

### Dependencies

Berikut beberapa dependencies nodejs yang dibutuhkan untuk menjalankan program
* pg
* pg-hstore
* nodemon
* express
* cors
* axios

### Installation

1. Clone reporsitori
   ```sh
   git clone https://github.com/kayisshal/191524047_3B_Kayis-Shalahuddin
   ```
2. Create .env file inside server folder
    ```sh
      DB_HOST= {your host }
      DB_USER= {your db user }
      DB_PASSWORD= {your db password }
      DB_DATABASE= {your db database }
      PORT= {your host port }
    ```
    Example :
     ```sh
      DB_HOST=localhost
      DB_USER=postgres
      DB_PASSWORD=admin
      DB_DATABASE=dvdrental
      PORT=5432
    ```
3. Open two terminals to the project folder, then:
    ```sh
      cd server
      npm install
      nodemon index.js
    ```
    wait until it says done or complete. Then:
    ```sh
      cd client
      npm install
      npm run serve
    ```
4. Because the server use PORT : 8080, the client will use PORT : 8081. Open in browser :
     ```sh
     http://localhost:8081/
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [] Multi-language Support
    - [] Chinese
    - [] Spanish

Lihat [buka issues](https://github.com/kayisshal/191524047_3B_Kayis-Shalahuddin/issues) untuk menampilkan list dari feature terbaru (dan known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


## Dibuat Oleh ##
* Kayis Shalahuddin 191524047 3B D4

<!-- CONTRIBUTING -->
## Contributing

Kontributor yang membuat program open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. Setiap kontribusi yang dibuat sangat di apresiasi **greatly appreciated**.

Jika Anda memiliki saran yang akan membuat program ini lebih baik, silakan fork repo dan buat pull request. Anda juga dapat memberi issues dengan tag "enhancement".
Jangan lupa untuk memberi proyek ini bintang! Terima kasih banyak!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Kayis Shalahuddin - kayis.shalahuddin.tif419@polban.ac.id

Project Link: [https://github.com/kayisshal/191524047_3B_Kayis-Shalahuddin](https://github.com/kayisshal/191524047_3B_Kayis-Shalahuddin)

<p align="right">(<a href="#top">back to top</a>)</p>



[issues-shield]: https://img.shields.io/github/issues/Kel-7-PW/kel7-timer-javascript
[forks-shield]: https://img.shields.io/github/forks/Kel-7-PW/kel7-timer-javascript
[stars-shield]: https://img.shields.io/github/stars/Kel-7-PW/kel7-timer-javascript
[license-shield]: https://img.shields.io/github/license/Kel-7-PW/kel7-timer-javascript
[issues-url]: https://github.com/Kel-7-PW/kel7-timer-javascript/issues
[forks-url]: https://github.com/Kel-7-PW/kel7-timer-javascript/network
[stars-url]: https://github.com/Kel-7-PW/kel7-timer-javascript/stargazers
[license-url]: https://github.com/Kel-7-PW/kel7-timer-javascript/pulse

import React from "react";
import Img from "../../../../images/logo_hima_persis.png";

const SejarahOrganisasi = () => {
  return (
    <div className="mt-6 pt-6">
      <div className="has-text-left" style={{ borderLeft: "6px solid red" }}>
        <p className="is-size-6 pl-2 has-text-weight-bold">
          Sejarah Hima Persis
        </p>
      </div>
      <hr />
      {/* <figure className="image is-16by9 is-640x360"> */}
      <figure
        className="image is-flex mx-auto"
        style={{
          width: "10%",
        }}
      >
        <img src={Img} alt="image" />
      </figure>
      <div>
        <h1 className="my-4 is-uppercase has-text-centered is-size-4">
          Sejarah Hima Persis
        </h1>
        <p className="is-uppercase has-text-weight-bold">Fase Kelahiran</p>
        <p className="has-text-justified" style={{ fontSize: "14px" }}>
          Tahun 1990 kita kenal sebagai era kebangkitan kembali gerakan
          mahasiswa pasca pemberlakuan NKK/BKK. Gerakan yang menuntut kebebasan
          berpendapat dalam bentuk kebebasan akademik dan kebebasan mimbar
          akademik di dalam kampus, mulai diramaikan kembali. Sehingga akhirnya
          demonstari bisa dilakukan mahasiswa di dalam kampus. Meski saat itu
          demonstrasi di luar kampus termasuk longmarch ke instansi-instansi
          pemerintahan tetap dilarang. Dengan semakin menguatnya dorongan
          demokratisasi, sampailah pada puncaknya, yaitu penggulingan rezim
          Soeharto di tahun 1998. Gelagat terbukanya partisipasi masyarakat,
          arus demokratisasi, kebebasan berpendapat, serta terpetakannya ”musuh
          bersama” pada saat itu, memunculkan idealisme mahasiswa yang semakin
          menggurita. Situasi seperti ini, setidaknya membawa semangat baru dan
          kesadaran internal mahasiswa untuk terus melaju melakukan perubahan;
          dalam aspek apapun. Di tengah kesadaran inilah, meski secara tidak
          langsung, Hima Persis terlahir.
        </p>
        <p className="is-uppercase has-text-weight-bold mt-5">
          Fase Perkembangan (1996-2009)
        </p>
        <p className="has-text-justified" style={{ fontSize: "14px" }}>
          {" "}
          Dalam perjalanan sejarah awal berdirinya, Rakanda Ihsan Setiadi Latif
          terpilih sebagai ketua umum (1996-2000, pembentukan awal kita anggap
          sebagai Muktamar ke-1). Masa ini penuh diisi dengan sosialisasi dan
          internalisasi Hima Persis ke dalam tubuh Persis. Gerakan ke dalam
          lebih kental ketimbang gerakan keluar. Sampai tahun 2000, tercatat
          telah memiliki 8 (delapan) komisariat yang tersebar di wilayah
          Bandung, Jakarta, dan Yogyakarta serta 2 (dua) komisariat rontisan.
          Dikatakan, telah bergabung sekitar 500 orang anggota dengan
          seperangkat kantor sekretariat, yaitu di Pesantren Persis no. 1
          Pajagalan Bandung yang sampai saat ini masih menjadi domisi PP Hima
          Persis. Walau dalam persebaran dan publishistiknya masih terkesan
          kurang, namun setidaknya ini menjadi sumbangan dan pijakan awal Hima
          Persis di masa selanjutnya. Pada periode ini, memang telah terumuskan
          upaya pembenahan struktur dan pola kaderisasi, meskipun dirasa kurang
          optimal dan transformatif kepada kepemimpinan selanjutnya, baik secara
          konsepan maupun praktiknya. Namun pada periode ini telah terangkat
          wacana ”Ulul Albab” sebagai kerangka dasar pergerakan Hima Persis yang
          diwujudkan dalam terma ”intelektual theorist dan moralis”. Demikian
          pula, kedaulatan dan kepemimpinan pada periode ini dikatakan cukup
          efektif. pada fase inipun internalisasi ke pra-kader mulai dilakukan
          melalui pelatihan-pelatihan kepemimpinan santri.
        </p>
      </div>
    </div>
  );
};

export default SejarahOrganisasi;

import React, { Component } from 'react';
import './App.css';
import Nama from './component/Nama'
import Panggilan from './component/Panggilan';
import Alamat from './component/Alamat';
import Tanggal from './component/Tanggal';
import Ayah from './component/Ayah';
import Ibu from './component/Ibu';
import Saudara from './component/Saudara';
import Hobi from './component/Hobi';
import Sekolah from './component/Sekolah';
import Jurusan from './component/Jurusan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nama />
        <Panggilan />
        <Alamat />
        <Tanggal />
        <Ayah />
        <Ibu />
        <Saudara />
        <Hobi />
        <Sekolah />
        <Jurusan />
      </div>
    );
  }
}

export default App;

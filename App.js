import './App.css';
// import * as ReactBootstrap from "react-bootstrap";
import React from 'react';

const datas = [
  {
    no:"1",
    tanggal: "1 Januari 2021",
    keterangan: "Saldo awal",
    debit: 21000000,
    kredit: 0,
  },
  {
    no:"2",
    tanggal: "1 Januari 2021",
    keterangan: "Gaji Karyawan",
    debit: 0,
    kredit: 3000000,
  },
  {
    no:"3",
    tanggal: "1 Januari 2021",
    keterangan: "Service AC",
    debit: 0,
    kredit: 500000,
  },
  {
    no:"4",
    tanggal: "1 Januari 2021",
    keterangan: "Pembelian ATK",
    debit: 0,
    kredit: 200000,
  },
  {
    no:"5",
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210001",
    debit: 500000,
    kredit: 0,
  },
  {
    no:"6",
    tanggal: "2 Januari 2021",
    keterangan: "Pembayaran Order #3D20210002",
    debit: 200000,
    kredit: 0,
  },
  {
    no:"7",
    tanggal: "5 Januari 2021",
    keterangan: "Pembayaran Order #3D20210005",
    debit: 500000,
    kredit: 0,
  },
  {
    no:"8",
    tanggal: "9 Januari 2021",
    keterangan: "Pembayaran Order #3D20210021",
    debit: 100000,
    kredit: 0,
  },
  {
    no :"9",
    tanggal: "14 Januari 2021",
    keterangan: "Pembelian Unit PC",
    debit: 0,
    kredit: 5970000,
  },
  {
    no:"10",
    tanggal: "14 Januari 2021",
    keterangan: "Pembayaran Order #3D20210007",
    debit: 350000,
    kredit: 0,
  },
  {
    no:"11",
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D202100011",
    debit: 275000,
    kredit: 0,
  },
  {
    no: "12",
    tanggal: "18 Januari 2021",
    keterangan: "Pembayaran Order #3D20210012",
    debit: 275000,
    kredit: 0,
  },
  {
    no:"13",
    tanggal: "25 Januari 2021",
    keterangan: "Pembayaran Order #3D20210016",
    debit: 500000,
    kredit: 0,
  },
];
let nor = 0;
let tgl = 0;
let ket = 0;
let saldo = 0;
let totalBit =0;
const Map = () => {
  return (
    <div className='Map container mt-5 mb-2'>
      <div className='py-1 mb-1 bg-warning text-center'>
        <h3>Laporan Keuangan CV Berkah Maju</h3>
        <h5>April 2021</h5>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
</svg>
      </div>
      <table class='table table-bordered border-primary table-striped table-hover text-center '>
        <thead>
          <tr>
            <th rowSpan='2' className='align-middle'>
              NO
            </th>
            <th rowSpan='2' className='align-middle'>
              Tanggal
            </th>
            <th rowSpan='2' className='align-middle'>
              Ket/Uraian
            </th>
            <th colSpan='2' className='align-middle'>
              Jumlah
            </th>
            <th rowSpan='2' className='align-middle'>
              Saldo
            </th>
          </tr>
          <tr>
            <th>Debit</th>
            <th>Kredit</th>
          </tr>
        </thead>
        <tbody>
        {datas.map(data => {
         nor = data.no
         tgl= data.tanggal
         ket =data.keterangan
         saldo =saldo + data.debit - data.kredit
         
        return(
          <tr>
           <td>{data.no}</td>
           <td>{data.tanggal}</td>
           <td>{data.keterangan}</td>
           <td>{data.debit}</td>
           <td>{data.kredit}</td>
           <td>{saldo}</td>
           </tr> 
        )
        })}
        {/* {datas.map(data => {
            totalBit += data.debit;

            return(
              <footer>
                <tr>
                  <td>Total</td>
                  <td>{totalBit}</td>
                </tr>
            </footer>
            )
        })} */}
        
        
          </tbody>
      </table>
    </div>
  );
};

export default Map;
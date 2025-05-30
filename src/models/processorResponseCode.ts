/**
 * PayPal Server SDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ProcessorResponseCode
 */
export enum ProcessorResponseCode {
  Response0000 = '0000',
  Response00N7 = '00N7',
  Response0100 = '0100',
  Response0390 = '0390',
  Response0500 = '0500',
  Response0580 = '0580',
  Response0800 = '0800',
  Response0880 = '0880',
  Response0890 = '0890',
  Response0960 = '0960',
  Response0R00 = '0R00',
  Response1000 = '1000',
  Response10Br = '10BR',
  Response1300 = '1300',
  Response1310 = '1310',
  Response1312 = '1312',
  Response1317 = '1317',
  Response1320 = '1320',
  Response1330 = '1330',
  Response1335 = '1335',
  Response1340 = '1340',
  Response1350 = '1350',
  Response1352 = '1352',
  Response1360 = '1360',
  Response1370 = '1370',
  Response1380 = '1380',
  Response1382 = '1382',
  Response1384 = '1384',
  Response1390 = '1390',
  Response1393 = '1393',
  Response5100 = '5100',
  Response5110 = '5110',
  Response5120 = '5120',
  Response5130 = '5130',
  Response5135 = '5135',
  Response5140 = '5140',
  Response5150 = '5150',
  Response5160 = '5160',
  Response5170 = '5170',
  Response5180 = '5180',
  Response5190 = '5190',
  Response5200 = '5200',
  Response5210 = '5210',
  Response5400 = '5400',
  Response5500 = '5500',
  Response5650 = '5650',
  Response5700 = '5700',
  Response5710 = '5710',
  Response5800 = '5800',
  Response5900 = '5900',
  Response5910 = '5910',
  Response5920 = '5920',
  Response5930 = '5930',
  Response5950 = '5950',
  Response6300 = '6300',
  Response7600 = '7600',
  Response7700 = '7700',
  Response7710 = '7710',
  Response7800 = '7800',
  Response7900 = '7900',
  Response8000 = '8000',
  Response8010 = '8010',
  Response8020 = '8020',
  Response8030 = '8030',
  Response8100 = '8100',
  Response8110 = '8110',
  Response8220 = '8220',
  Response9100 = '9100',
  Response9500 = '9500',
  Response9510 = '9510',
  Response9520 = '9520',
  Response9530 = '9530',
  Response9540 = '9540',
  Response9600 = '9600',
  ResponsePcnr = 'PCNR',
  ResponsePcvv = 'PCVV',
  ResponsePp06 = 'PP06',
  ResponsePprn = 'PPRN',
  ResponsePpad = 'PPAD',
  ResponsePpab = 'PPAB',
  ResponsePpae = 'PPAE',
  ResponsePpag = 'PPAG',
  ResponsePpai = 'PPAI',
  ResponsePpar = 'PPAR',
  ResponsePpau = 'PPAU',
  ResponsePpav = 'PPAV',
  ResponsePpax = 'PPAX',
  ResponsePpbg = 'PPBG',
  ResponsePpc2 = 'PPC2',
  ResponsePpce = 'PPCE',
  ResponsePpco = 'PPCO',
  ResponsePpcr = 'PPCR',
  ResponsePpct = 'PPCT',
  ResponsePpcu = 'PPCU',
  ResponsePpd3 = 'PPD3',
  ResponsePpdc = 'PPDC',
  ResponsePpdi = 'PPDI',
  ResponsePpdv = 'PPDV',
  ResponsePpdt = 'PPDT',
  ResponsePpef = 'PPEF',
  ResponsePpel = 'PPEL',
  ResponsePper = 'PPER',
  ResponsePpex = 'PPEX',
  ResponsePpfe = 'PPFE',
  ResponsePpfi = 'PPFI',
  ResponsePpfr = 'PPFR',
  ResponsePpfv = 'PPFV',
  ResponsePpgr = 'PPGR',
  ResponsePph1 = 'PPH1',
  ResponsePpif = 'PPIF',
  ResponsePpii = 'PPII',
  ResponsePpim = 'PPIM',
  ResponsePpit = 'PPIT',
  ResponsePplr = 'PPLR',
  ResponsePpls = 'PPLS',
  ResponsePpmb = 'PPMB',
  ResponsePpmc = 'PPMC',
  ResponsePpmd = 'PPMD',
  ResponsePpnc = 'PPNC',
  ResponsePpnl = 'PPNL',
  ResponsePpnm = 'PPNM',
  ResponsePpnt = 'PPNT',
  ResponsePpph = 'PPPH',
  ResponsePppi = 'PPPI',
  ResponsePppm = 'PPPM',
  ResponsePpqc = 'PPQC',
  ResponsePpre = 'PPRE',
  ResponsePprf = 'PPRF',
  ResponsePprr = 'PPRR',
  ResponsePps0 = 'PPS0',
  ResponsePps1 = 'PPS1',
  ResponsePps2 = 'PPS2',
  ResponsePps3 = 'PPS3',
  ResponsePps4 = 'PPS4',
  ResponsePps5 = 'PPS5',
  ResponsePps6 = 'PPS6',
  ResponsePpsc = 'PPSC',
  ResponsePpsd = 'PPSD',
  ResponsePpse = 'PPSE',
  ResponsePpte = 'PPTE',
  ResponsePptf = 'PPTF',
  ResponsePpti = 'PPTI',
  ResponsePptr = 'PPTR',
  ResponsePptt = 'PPTT',
  ResponsePptv = 'PPTV',
  ResponsePpua = 'PPUA',
  ResponsePpuc = 'PPUC',
  ResponsePpue = 'PPUE',
  ResponsePpui = 'PPUI',
  ResponsePpup = 'PPUP',
  ResponsePpur = 'PPUR',
  ResponsePpvc = 'PPVC',
  ResponsePpve = 'PPVE',
  ResponsePpvt = 'PPVT',
}

/**
 * Schema for ProcessorResponseCode
 */
export const processorResponseCodeSchema: Schema<ProcessorResponseCode> = stringEnum(
  ProcessorResponseCode,
  true
);

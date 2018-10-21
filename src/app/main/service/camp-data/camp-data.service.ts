import {Injectable} from '@angular/core';
import {Camp} from '../../models/camp';
import {City} from '../../models/city';

@Injectable({
  providedIn: 'root'
})
export class CampDataService {
  camps: Camp[] = new Array;

  constructor() {
    const dadaabBackgroundImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/219898850fdafe338e94288d9a9284a5/image.png';
    const kakumaBackgroundImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/e81d44c37252371665c8f2a82cfd7abb/image.png';
    const bidibidiBackgroundImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/bcb453600f62ab1d270e7d2740be461f/image.png';
    const zaatarBackgroundImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/db9bdc4747801a3d4a595e29aab253b3/image.png';
    const kutupahlongBackgroundImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/7cc718bdb3d8a1d839d91a674c9067c8/image.png';

    const dadaabRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const kakumaRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcc4b6822070a266ea519e6/87917a2663de66b938c9ce0ed7ae7445/ezgif.com-add-text.gif';
    const bidibidiRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const zaatarRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcc4b6822070a266ea519e6/a47102d816b5aa7489919f66520528a5/ezgif.com-add-text-2.gif';
    const kutupahlongRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';

    const plymouthRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const bournemouthRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const bradfordRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const westonRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';
    const birminghamRadarImage = 'https://crisp.nus.edu.sg/~research/tutorial/sar.gif';

    const dadaabNightSkyImage = 'https://worldview.earthdata.nasa.gov/?ca=false&cm=opacity&cv=100&p=geographic&l=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines&l1=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines,Land_Mask(opacity=0.3)&t=2012-08-16-T00%3A00%3A00Z&z=3&t1=2016-10-19-T00%3A00%3A00Z&v=39.45537290735321,-0.5680073924497683,39.83055601282196,-0.3933247752622683&ab=off&as=2018-10-13T00%3A00%3A00Z&ae=2018-10-20T00%3A00%3A00Z&av=3&al=true';
    const kakumaNightSkyImage = 'https://worldview.earthdata.nasa.gov/?ca=false&cm=opacity&cv=100&p=geographic&l=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines&l1=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines,Land_Mask(opacity=0.3)&t=2012-08-16-T00:00:00Z&z=3&t1=2016-10-19-T00:00:00Z&v=34.654677390042295,3.607769084650299,35.029860495511045,3.782451701837799&ab=off&as=2018-10-13T00:00:00Z&ae=2018-10-20T00:00:00Z&av=3&al=true';
    const bidibidiNightSkyImage = '';
    const zaatarNightSkyImage = 'https://worldview.earthdata.nasa.gov/?ca=true&cm=opacity&p=geographic&l=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines&l1=ASTER_GDEM_Greyscale_Shaded_Relief(opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights,Reference_Labels,Reference_Features,Coastlines,Land_Mask(opacity=0.3)&t=2012-08-16-T00%3A00%3A00Z&z=3&t1=2016-10-19-T00%3A00%3A00Z&v=35.01200464148149,31.323086890313107,38.01346948523149,32.72054782781311&ab=off&as=2018-10-13T00%3A00%3A00Z&ae=2018-10-20T00%3A00%3A00Z&av=3&al=true';
    const kutupahlongNightSkyImage = 'https://worldview.earthdata.nasa.gov/?ca=false&cm=opacity&cv=100&p=geographic&l=ASTER_GDEM_Greyscale_Shaded_Relief(hidden,opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights(hidden),Reference_Labels,Reference_Features,Coastlines,VIIRS_SNPP_DayNightBand_ENCC&l1=ASTER_GDEM_Greyscale_Shaded_Relief(hidden,opacity=0.35),VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor(hidden),VIIRS_Night_Lights(hidden),Reference_Labels,Reference_Features,Coastlines,VIIRS_SNPP_DayNightBand_ENCC,Land_Mask(opacity=0.3)&t=2016-12-16-T00%3A00%3A00Z&z=3&t1=2018-10-20-T00%3A00%3A00Z&v=91.34576156303163,20.652448891872087,92.78670098201871,21.35978503895299&ab=off&as=2018-10-13T00%3A00%3A00Z&ae=2018-10-20T00%3A00%3A00Z&av=3&al=true';

    const plymouth: City = new City('Plymouth', 234982, plymouthRadarImage);
    const bournemouth: City = new City('Plymouth', 234982, bournemouthRadarImage);
    const bradford: City = new City('Plymouth', 234982, bradfordRadarImage);
    const weston: City = new City('Plymouth', 234982, westonRadarImage);
    const birmingham: City = new City('Plymouth', 234982, birminghamRadarImage);

    this.camps.push(new Camp('Dadaab', 253000, 4700, '1991', 'Somalia', dadaabBackgroundImage, dadaabRadarImage, dadaabNightSkyImage, plymouth));
    this.camps.push(new Camp('Kakuma', 190000, 6333, '1991', 'Somalia', kakumaBackgroundImage, kakumaRadarImage, kakumaNightSkyImage, bournemouth));
    this.camps.push(new Camp('Bidibidi', 272000, 1183, '1991', 'Somalia', bidibidiBackgroundImage, bidibidiRadarImage, bidibidiNightSkyImage, bradford));
    this.camps.push(new Camp('Zaatar', 79000, 15800, '1991', 'Somalia', zaatarBackgroundImage, zaatarRadarImage, zaatarNightSkyImage, weston));
    this.camps.push(new Camp('Kutupahlong', 970000, 46338, '1991', 'Somalia', kutupahlongBackgroundImage, kutupahlongRadarImage, kutupahlongNightSkyImage, birmingham));
  }

  getCamps(): Camp[] {
    return this.camps;
  }

  getCamp(name: String): Camp {
    return this.camps.find((item: Camp) => item.name === name);
  }
}

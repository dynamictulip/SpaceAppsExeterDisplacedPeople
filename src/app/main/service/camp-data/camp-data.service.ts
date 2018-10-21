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

    const dadaabRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/219898850fdafe338e94288d9a9284a5/image.png';
    const kakumaRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/e81d44c37252371665c8f2a82cfd7abb/image.png';
    const bidibidiRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/bcb453600f62ab1d270e7d2740be461f/image.png';
    const zaatarRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/db9bdc4747801a3d4a595e29aab253b3/image.png';
    const kutupahlongRadarImage = 'https://trello-attachments.s3.amazonaws.com/5bcaff352a54ed589cae19a2/5bcb876a5bbf242e8cb3d642/7cc718bdb3d8a1d839d91a674c9067c8/image.png';

    const plymouthRadarImage = '';
    const bournemouthRadarImage = '';
    const bradfordRadarImage = '';
    const westonRadarImage = '';
    const birminghamRadarImage = '';

    const plymouth: City = new City('Plymouth', 234982, plymouthRadarImage);
    const bournemouth: City = new City('Plymouth', 234982, bournemouthRadarImage);
    const bradford: City = new City('Plymouth', 234982, bradfordRadarImage);
    const weston: City = new City('Plymouth', 234982, westonRadarImage);
    const birmingham: City = new City('Plymouth', 234982, birminghamRadarImage);

    this.camps.push(new Camp('Dadaab', 253000, 0.1, '1991', 'Somalia', dadaabBackgroundImage, dadaabRadarImage, plymouth));
    this.camps.push(new Camp('Kakuma', 190000, 0.8, '1991', 'Somalia', kakumaBackgroundImage, kakumaRadarImage, bournemouth));
    this.camps.push(new Camp('Bidibidi', 272000, 0.4, '1991', 'Somalia', bidibidiBackgroundImage, bidibidiRadarImage, bradford));
    this.camps.push(new Camp('Zaatar', 79000, 0.8, '1991', 'Somalia', zaatarBackgroundImage, zaatarRadarImage, weston));
    this.camps.push(new Camp('Kutupahlong', 970000, 0.6, '1991', 'Somalia', kutupahlongBackgroundImage, kutupahlongRadarImage, birmingham));
  }

  getCamps(): Camp[] {
    return this.camps;
  }

  getCamp(name: String): Camp {
    return this.camps.find((item: Camp) => item.name === name);
  }
}

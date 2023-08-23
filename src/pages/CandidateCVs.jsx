import React, { useEffect, useState } from 'react'
import { Header, Image, Table } from 'semantic-ui-react'
import { CandidateCVService } from '../services/candidateCVService';
import { CandidatePhotoService } from '../services/candidatePhotoService';
import { Link } from 'react-router-dom';

export default function CandidateCVs() {
    const [candidateCvs, setCandidateCVs] = useState([])
    const [candidatePhotos, setCandidatePhotos] = useState([])
    const imageStyle = {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      objectFit: "cover",
      }

    useEffect(()=>{
        let candidateCvService = new CandidateCVService();
        candidateCvService.getcandidateCV().then((res)=>setCandidateCVs(res.data.data));
        
        let candidatePhotoService = new CandidatePhotoService();
        candidatePhotoService.getAllPhoto().then((res)=>setCandidatePhotos(res.data.data))
    },[])

    
  return (
    <div style={{display:"flex", justifyContent:"center", marginTop:"30px"}}>
      <Table basic='very' celled collapsing >
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Candidate</Table.HeaderCell>
            <Table.HeaderCell>Program language</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        {
            candidateCvs.map((tempCandidateCV)=>{
                
                let photo = candidatePhotos.find(photo => photo.candidateCV?.id === tempCandidateCV.id)?.photoURL;
                console.log(photo);
                return(
                <Table.Body key={tempCandidateCV.id}>
                <Table.Row>
                  <Table.Cell>
                  <Link to={`/candidateCVs/${tempCandidateCV.id}`}>
                    <Header as='h4' image>
                      <Image src={photo} rounded style={imageStyle}/>
                      <Header.Content>
                        
                        {tempCandidateCV.candidate?.firstName} {tempCandidateCV.candidate?.lastName}
                        
                        <Header.Subheader>{tempCandidateCV.jobPosition?.positionName}</Header.Subheader>
                      </Header.Content>
                    </Header>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{tempCandidateCV.programLanguage?.programLanguageName}</Table.Cell>
                </Table.Row>
              </Table.Body>
                )
            })
        }

   
  </Table>
    </div>
  )
}

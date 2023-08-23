import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Image, Container } from "semantic-ui-react";
import { CandidateCVService } from "../services/candidateCVService";
import { CandidatePhotoService } from "../services/candidatePhotoService";


export default function CandidateCV() {
  let { id } = useParams();
  const [candidateCV, setCandidateCV] = useState({});
  const [candidatePhoto, setCandidatePhoto] = useState({});
  const imageStyle = {
    width: "200px",
            height: "200px",
            marginBottom: "30px",
            marginTop: "30px",
            borderRadius: "50%",
            objectFit: "cover",
  
    }

  useEffect(() => {
    let candidateCVService = new CandidateCVService();
    candidateCVService.getById(id).then((res) => setCandidateCV(res.data.data));
  }, []);
  useEffect(() => {
    let candidatePhotoService = new CandidatePhotoService();
    candidatePhotoService
      .getCandidateFoto(id)
      .then((res) => setCandidatePhoto(res.data.data));
  }, []);
  return (
    <div>
      <Image src={candidatePhoto.photoURL} style={imageStyle}
      />
      <Container style={{marginBottom:"15px"}}>
        <h3>About me</h3>
        <Table celled fixed>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Full name</Table.Cell>
              <Table.Cell>
                {" "}
                {candidateCV.candidate?.firstName}{" "}
                {candidateCV.candidate?.lastName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Description</Table.Cell>
              <Table.Cell>{candidateCV.description}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Birth Of Year</Table.Cell>
              <Table.Cell>{candidateCV.candidate?.birthOfYear}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Github address</Table.Cell>
              <Table.Cell>{candidateCV.gitHubAddress}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>LinkedIn address</Table.Cell>
              <Table.Cell>{candidateCV.linkedInAddress}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <Container style={{marginBottom:"15px"}}>
        <h3>Education</h3>
        <Table celled fixed>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Universitiy name</Table.Cell>
              <Table.Cell>
                {candidateCV.school?.universityName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Department name</Table.Cell>
              <Table.Cell>{candidateCV.department?.departmentName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Year of education</Table.Cell>
              <Table.Cell>{candidateCV.startingDate}{"<->"}{(candidateCV.endingDate===null)?("Studying"):(candidateCV.endingDate)}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <Container style={{marginBottom:"15px"}}>
        <h3>Work</h3>
        <Table celled fixed>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Job position</Table.Cell>
              <Table.Cell>
                {candidateCV.jobPosition?.positionName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Program language</Table.Cell>
              <Table.Cell>{candidateCV.programLanguage?.programLanguageName}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Job experience</Table.Cell>
              <Table.Cell>{candidateCV.stratingJobPractice}{"<->"}{(candidateCV.endingJobPractice===null)?("Working"):(candidateCV.endingJobPractice)}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Activity years</Table.Cell>
              <Table.Cell>{candidateCV.activityYear}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
      <Container style={{marginBottom:"15px"}}>
        <h3>Foregin language</h3>
        <Table celled fixed>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Language name</Table.Cell>
              <Table.Cell>
                {candidateCV.foreignLanguage?.languageName}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Level language</Table.Cell>
              <Table.Cell>{candidateCV.levelLanguage?.level}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}

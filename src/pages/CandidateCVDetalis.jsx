import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { CandidateCVService } from "../services/candidateCVService";

export default function CandidateCV() {
  let { id } = useParams();
  const [candidateCV, setCandidateCV] = useState({});

  useEffect(() => {
    let candidateCVService = new CandidateCVService();
    candidateCVService.getById(id).then((res) => setCandidateCV(res.data.data));
  });
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>{candidateCV.description}</Table.HeaderCell>
            <Table.HeaderCell>Notes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>No Name Specified</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jimmy</Table.Cell>
            <Table.Cell>Requires Action</Table.Cell>
            <Table.Cell>None</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Jamie</Table.Cell>
            <Table.Cell>Unknown</Table.Cell>
            <Table.Cell>Hostile</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

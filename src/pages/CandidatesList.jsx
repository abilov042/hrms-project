import React, { useEffect, useState } from "react";
import { CandidateService } from "../services/candidateService";

export default function CandidatesList() {
  const [candidates, setCandidate] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidate()
      .then((result) => setCandidate(result.data.data));
  }, []);

  return (
    <div className="candidateList">
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Email</th>
            <th>Doqum ili</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => {
            return (
              <tr key={candidate.id}>
                <td>{candidate.firstName}</td>
                <td>{candidate.lastName}</td>
                <td>{candidate.email}</td>
                <td>{candidate.birthOfYear}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

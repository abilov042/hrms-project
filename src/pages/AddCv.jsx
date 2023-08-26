import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Container, Form, Select } from 'semantic-ui-react'
import { UniversityService } from '../services/universityService'
import { DepartmentService } from '../services/departmentService'
import { ForeignLanguageService } from '../services/foreignLanguageService'
import { RemoteOrOnside, RemoteOrOnsideService } from '../services/remoteOrOnsideService'
import { LevelLanguageService } from '../services/levelLanguageService'
import { JobPositionService } from '../services/jobPositionService'

export default function AddCv() {
    const [universties, setUniversties] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [levelLanguage, setLevel] = useState([]);
    const [remoteOrOnside, setremoveOrOnside] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    useEffect(()=>{
        const universtyService = new UniversityService()
        universtyService.getAllUniversities().then(res => setUniversties(res.data.data))

        const departmentService = new DepartmentService()
        departmentService.getAllDepartment().then(res => setDepartments(res.data.data))

        const foreignLanguageService = new ForeignLanguageService()
        foreignLanguageService.getAllLanguage().then(res => setLanguages(res.data.data))

        const levelLanguageService = new LevelLanguageService()
        levelLanguageService.getAllLevel().then(res => setLevel(res.data.data))

         const remoteOrOnsideService = new RemoteOrOnsideService()
         remoteOrOnsideService.getAll().then(res => setremoveOrOnside(res.data.data))

         const jobPositionService = new JobPositionService()
         jobPositionService.getAllPosition().then(res => setJobPositions(res.data.data))
    },[])
    const universityOptions = universties.map((university, index) => ({
        key:index, value:university.id, text:university.universityName
    }));
    
    const departmentOptions = departments.map((department, index) => ({
        key: index, value: department.id, text: department.departmentName
    }));

    const languageOptions = languages.map((language, index) => ({
        key: index, value: language.id, text: language.languageName
    }));

    const levelOptions = levelLanguage.map((level, index) => ({
        key:index, value: level.id, text: level.level
    }));

    const remoteOrOnsideOptions = remoteOrOnside.map((tempRemoteOrOnside, index) => ({
        key: index, value: tempRemoteOrOnside.id, text: tempRemoteOrOnside.remoteOrOnside
    }));

    const jobPositionOptions = jobPositions.map((jobPosition, index) => ({
        key: index, value: jobPosition.id, text: jobPosition.positionName
    }));
  return (
    <div>
    <Container style={{display:"flex", justifyContent:"center", marginTop:"100px", marginBottom:"200px"}}>
      <Form style={{width:"500px"}}>
        <Form.Field>
        <label>Description</label>
        <textarea placeholder='description'/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Select your university' options={universityOptions}/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Select your department' options={departmentOptions}/>
        </Form.Field>
        <Form.Field>
        <label>Starting university</label>
        <input placeholder='yyyy/mm/dd'/>
        </Form.Field>
        <Form.Field>
        <label>Ending university</label>
        <input placeholder='yyyy/mm/dd'/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Select your language' options={languageOptions}/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Select your language level' options={levelOptions}/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Job position' options={jobPositionOptions}/>
        </Form.Field>
        <Form.Field>
        <Select placeholder='Remote or Onside' options={remoteOrOnsideOptions}/>
        </Form.Field>
        <Form.Field>
        <label>Github link</label>
        <input placeholder='http://github/...'/>
        </Form.Field>
        <Form.Field>
        <label>LinkdIn link</label>
        <input placeholder='http://linkdIn/...'/>
        </Form.Field>
        <Form.Field>
        <label>Starting job</label>
        <input placeholder='yyyy/mm/dd'/>
        </Form.Field>
        <Form.Field>
        <label>Ending job</label>
        <input placeholder='yyyy/mm/dd'/>
        </Form.Field>
    
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
    </div>
  )
}

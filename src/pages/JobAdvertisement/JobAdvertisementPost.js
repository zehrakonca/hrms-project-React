import React, { useEffect, useState } from 'react'
import { Container, Form, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react'
import { Formik, useFormik } from "formik";
import SectorService from '../../services/sectorService';
import PositionLevelService from '../../services/positionLevelService';
import EducationTypeService from '../../services/educationTypeService';
import JobService from '../../services/jobService';
import CityService from '../../services/cityService';
import MilitaryStatuService from '../../services/militaryStatuService';
import WorkTypeService from '../../services/workTypeService';
import ExperienceService from '../../services/experienceService';
import JobAdvertisementService from '../../services/jobAdvertisementService';
import moment from 'moment';
import * as Yup from 'yup';

export default function JobAdvertisementPost() {

    let jobAdvertisementService = new JobAdvertisementService();

    const [sectors, setSectors] = useState([]);
    const [positionLevels, setPositionLevels] = useState([]);
    const [educationLevels, setEducationLevels] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [cities, setCities] = useState([]);
    const [militaryStatus, setMilitaryStatus] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        let sectorService = new SectorService();
        let positionLevelService = new PositionLevelService();
        let educationTypeService = new EducationTypeService();
        let jobService = new JobService();
        let cityService = new CityService();
        let militaryStatuService = new MilitaryStatuService();
        let workTypeService = new WorkTypeService();
        let experienceService = new ExperienceService();

        sectorService.getAllSectors().then((result) => { setSectors(result.data.data); });

        positionLevelService.getAllPositionLevels().then((result) => { setPositionLevels(result.data.data); })

        educationTypeService.getAllEducationLevels().then((result) => { setEducationLevels(result.data.data); })

        jobService.getAllJobs().then((result) => { setJobs(result.data.data); });

        cityService.getAllCities().then((result) => { setCities(result.data.data); })

        militaryStatuService.getAllMilitaryStatu().then((result) => { setMilitaryStatus(result.data.data); })

        workTypeService.getAllWorkTypes().then((result) => { setWorkTypes(result.data.data); })

        experienceService.getAllExperiences().then((result) => { setExperiences(result.data.data); })
    }, [])

    const formik = useFormik({
        initialValues: {
            advertisementName: "",
            jobDescription: "",
            numberOfVacancies: "",
            jobSalary: "",
            releaseDate: moment().format("YYYY-MM-DD"),
            applicationDate: "",
            sectorId: "",
            positionLevelId: "",
            educationLevelId: "",
            id: 1,
            jobId: "",
            cityId: "",
            typeId: "",
            militaryStatuId: "",
            workTypeId: "",
            experienceId: ""
        },
         validationSchema: Yup.object({
            advertisementName: Yup.string().required("advertisement name is cannot be blank."),
            jobDescription: Yup.string().required("job description is cannot be blank."),
            numberOfVacancies: Yup.number().required("number of  vacancies must be at least 1 person. "),
            jobSalary: Yup.number(),
            sectorId: Yup.number().required("sector info is cannot be blank."),
            positionLevelId: Yup.number().required("position level is cannot be blank."),
            educationTypeId: Yup.number().required("educatiion level is cannot be blank"),
            jobId: Yup.number().required("job name is cannot beblank."),
            cityId: Yup.number().required("city info is cannot be blank."),
            militaryStatuId: Yup.number(),
            workTypeId: Yup.number().required("work type is cannot be blank."),
            experienceId: Yup.number(),
            releaseDate: Yup.date(),
            applicationDate: Yup.date()

         }),
        onSubmit: (values) => {
            let jobAdvertisement = {
                advertisementName: values.advertisementName,
                numberOfVacancies: values.numberOfVacancies,
                jobSalary: values.jobSalary,
                jobDescription: values.jobDescription,
                releaseDate: values.releaseDate,
                applicationDate: values.applicationDate,
                sector: { sectorId: values.sectorId },
                city: { cityId: values.cityId },
                positionLevel: { positionLevelId: values.positionLevelId },
                educationLevel: { educationLevelId: values.educationLevelId },
                employer: { id:9},
                job: { jobId: values.jobId },
                militaryStatu: { militaryStatuId: values.militaryStatuId },
                workType: { workTypeId: values.workTypeId },
                experience: { experienceId: values.experienceId },
                jobType: { typeId: values.typeId }
            }
            console.log(jobAdvertisement);
            jobAdvertisementService.addAdvertisement(jobAdvertisement).then((result) => console.log(result.data.message));
        }
    }
    )

    const sectorOption = sectors.map((sector,index)=>({
        key: index,
        text: sector.sectorName,
        value:sector.id
    }));


  return (
    <Container style={{margin:"1em"}}>
        <Segment>
        <Header as='h3' dividing>
          <Icon name='plug'/>  Job Advertisement Posting
        </Header>
            <Grid>
                <Grid.Row divided>
                    <Grid.Column width={16}>
                        <Grid>
                            <Grid.Row divided>
                                <Grid.Column width={8}></Grid.Column>
                                    <Grid.Column width={4}></Grid.Column>
                                <Grid.Column width={8}>h</Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Segment>
    </Container>
  )
}

import React, { useEffect, useState } from 'react'
import { Button, Container, Divider, Form, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react'
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
    const [educationTypes, setEducationType] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [cities, setCities] = useState([]);
    const [militaryStatus, setMilitaryStatus] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [experiences, setExperiences] = useState([]);

    const [open, setOpen] = React.useState(false);

    let sectorService = new SectorService();
    let positionLevelService = new PositionLevelService();
    let educationTypeService = new EducationTypeService();
    let jobService = new JobService();
    let cityService = new CityService();
    let militaryStatuService = new MilitaryStatuService();
    let workTypeService = new WorkTypeService();
    let experienceService = new ExperienceService();

    useEffect(() => {
        sectorService.getSectors().then((result) => { setSectors(result.data.data); });

        positionLevelService.getAllPositionLevel().then((result) => { setPositionLevels(result.data.data); })

        educationTypeService.getAllEducationType().then((result) => { setEducationType(result.data.data); })

        jobService.getAllJob().then((result) => { setJobs(result.data.data); });

        cityService.getAllCity().then((result) => { setCities(result.data.data); })

        militaryStatuService.getAllMilitaryStatu().then((result) => { setMilitaryStatus(result.data.data); })

        workTypeService.getAllWorkType().then((result) => { setWorkTypes(result.data.data); })

        experienceService.getAllExperience().then((result) => { setExperiences(result.data.data); })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sectorOptions = sectors.map((sector) => ({
        key: sector.id,
        text: sector.sector,
        value: sector,
    }));

    const cityOptions = cities.map((city) => ({
        key: city.id,
        text: city.cityName,
        value: city,
    }));

    const positionLevelOptions = positionLevels.map((positionLevel) => ({
        key: positionLevel.id,
        text: positionLevel.positionLevel,
        value: positionLevel,
    }));

    const educationTypeOptions = educationTypes.map((educationType) => ({
        key: educationType.educationTypeId,
        text: educationType.educationTypeName,
        value: educationType,
    }));

    const jobOptions = jobs.map((job) => ({
        key: job.id,
        text: job.jobName,
        value: job,
    }));

    const militaryStatuOptions = cities.map((militaryStatu) => ({
        key: militaryStatu.id,
        text: militaryStatu.militaryStatu,
        value: militaryStatu,
    }));

    const workTypeOptions = workTypes.map((workType) => ({
        key: workType.id,
        text: workType.typeOfWork,
        value: workType,
    }));

    const experienceOptions = experiences.map((experience) => ({
        key: experience.id,
        text: experience.experience,
        value: experience,
    }));


    const initialValues = {
        advertisementName: "",
        jobDescription: "",
        numberOfVacancies: "",
        jobSalary: "",
        releaseDate: moment().format("YYYY-MM-DD"),
        applicationDate: "",
        sector: "",
        positionLevel: "",
        educationType: "",
        job: "",
        city: "",
        militaryStatu: "",
        workType: "",
        experience: "",
        employer: 9,
    };

    const validationSchema = Yup.object({
        advertisementName: Yup.string().required("advertisement name is cannot be blank."),
        jobDescription: Yup.string().required("job description is cannot be blank."),
        numberOfVacancies: Yup.number().required("number of  vacancies must be at least 1 person. "),
        jobSalary: Yup.number(),
        sector: Yup.object().required("sector info is cannot be blank."),
        positionLevel: Yup.object().required("position level is cannot be blank."),
        educationType: Yup.object().required("educatiion level is cannot be blank"),
        job: Yup.object().required("job name is cannot be blank."),
        city: Yup.object().required("city info is cannot be blank."),
        militaryStatu: Yup.object(),
        workType: Yup.object().required("work type is cannot be blank."),
        experience: Yup.object(),
        releaseDate: Yup.date().required("required field."),
        applicationDate: Yup.date().required("required field."),
    })
    function refreshPage() {
        window.location.reload();
    }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        jobAdvertisementService.addAdvertisement({
            advertisementName: values.advertisementName,
            numberOfVacancies: values.numberOfVacancies,
            jobSalary: values.jobSalary,
            jobDescription: values.jobDescription,
            releaseDate: values.releaseDate,
            applicationDate: values.applicationDate,
            sector: Number(values.sector.id),
            city: Number(values.city.id),
            positionLevel: Number(values.positionLevel.id),
            educationLevel: Number(values.educationLevel.id),
            job: Number(values.job.id),
            militaryStatu: Number(values.militaryStatu.id),
            workType: Number(values.workType.id),
            experience: Number(values.experience.id),
            jobType: Number(values.jobType.id),
        })
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
        refreshPage();
    }

    const handleModal = (value) => {
        setOpen(value);
    };

    const handleChange = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    return (
        <Container style={{ margin: "1em" }}>
            <Segment>
                <Header as='h3' dividing>
                    <Icon name='plug' />  Job Advertisement Posting
                </Header>
                <Grid>
                    <Grid.Row divided>
                        <Grid.Column>
                            <Formik>
                            <Form>
                                <Form.Group widths={'equal'}>
                                    <Form.Input
                                    name="advertisementName"
                                        label="Advertisement Name"
                                        icon='bullseye'
                                        placeholder='please enter advertisement name.'
                                        onChange={(event, data) => handleChange("advertisementName", data.value)}
                                            value={formik.values.advertisementName}
                                    />
                                     <Form.Select
                                        label="Work Type"
                                        placeholder='select work type.'
                                    />
                                </Form.Group>
                                <Divider />
                                <Form.Group widths={'equal'}>
                                    <Form.TextArea
                                        label="Job Description"
                                        placeholder='please enter advertisement description.
                                        for example, what will they do? what you want them? what you offer them?'
                                    />
                                </Form.Group>
                                <Divider />
                                <Form.Group widths={'equal'}>
                                    <Form.Input
                                        label="Number of Vacancies"
                                        icon='chess'
                                        placeholder='number of vacancies.'
                                    />
                                    <Form.Input
                                        label="Job Salary"
                                        icon='dollar sign'
                                        placeholder='salary you offer.'
                                    />
                                    <Form.Select
                                        label="Military Statu"
                                        placeholder='select military statu.'
                                    />
                                </Form.Group>
                                <Divider />
                                <Form.Group widths={'equal'}>
                                    <Form.Select
                                        label="Sector"
                                        placeholder='select sector.'
                                    />
                                    <Form.Select
                                        label="Job"
                                        placeholder='select job.'
                                    />
                                    <Form.Select
                                        label="City"
                                        placeholder='select city.'
                                    />
                                   
                                </Form.Group>
                                <Divider />
                                <Form.Group widths={'equal'}>
                                    <Form.Select
                                        label="Experience"
                                        placeholder='select experience.'
                                    />
                                    <Form.Select
                                        label="Position Level"
                                        placeholder='select position level.'
                                    />
                                    <Form.Select
                                        label="Education Level"
                                        placeholder='select education level.'
                                    />
                                </Form.Group>
                                <Divider />
                                <Button animated='fade' inverted color='orange' type='submit'>
                                    <Button.Content visible>Post Advertisement</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='plug' />
                                    </Button.Content>
                                </Button>
                            </Form>
                            </Formik>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}
<Form.Group widths={'equal'}>

</Form.Group>


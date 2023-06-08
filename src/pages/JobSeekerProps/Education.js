import React, { useEffect, useState } from 'react'
import { Button, Container, Divider, Form, Grid, Header, Icon, Label, Segment, Table } from 'semantic-ui-react'
import EducationTypeService from '../../services/educationTypeService'
import UniversityService from '../../services/universityService'
import ProgramInfoService from '../../services/programInfoService'
import FacultyService from '../../services/facultyService'
import EducationService from '../../services/educationService'
import * as Yup from "yup";
import { Formik, useFormik } from 'formik';


export default function Education() {

    const [open, setOpen] = useState([])

    const [educationTypes, setEducationTypes] = useState([])
    const [universities, setUniversities] = useState([])
    const [programs, setPrograms] = useState([])
    const [faculties, setFaculties] = useState([])
    const [educations, setEducations] = useState([])

    let educationTypeService = new EducationTypeService()
    let universityService = new UniversityService()
    let programInfoService = new ProgramInfoService()
    let facultyService = new FacultyService()
    let educationService = new EducationService()

    useEffect(() => {
        educationTypeService.getAllEducationType().then((result) => setEducationTypes(result.data.data));
        universityService.getUniversity().then((result) => setUniversities(result.data.data));
        programInfoService.getAllProgramInfo().then((result) => setPrograms(result.data.data));
        facultyService.getAllFaculty().then((result) => setFaculties(result.data.data));
        educationService.getAllEducation().then((result) => setEducations(result.data.data));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const educationTypeOptions = educationTypes.map((educationType) => ({
        key: educationType.educationTypeId,
        text: educationType.educationTypeName,
        value: educationType,
    }));

    const universityOptions = universities.map((university) => ({
        key: university.id,
        text: university.universityName,
        value: university,
    }));

    const programOptions = programs.map((program) => ({
        key: program.id,
        text: program.programName,
        value: program,
    }));

    const facultyOptions = faculties.map((faculty) => ({
        key: faculty.id,
        text: faculty.facultyName,
        value: faculty,
    }));

    const initialValues = {
        educationType: "",
        university: "",
        faculty: "",
        program: "",
        startedDate: "",
        graduationDate: "",
        jobSeekerId: 22,
    }

    const validationSchema = Yup.object({
        educationType: Yup.object().required("required field"),
        university: Yup.object().required("required field"),
        faculty: Yup.object().required("required field"),
        program: Yup.object().required("required field"),
        startedDate: Yup.date().required("required field"),
        graduationDate: Yup.date(),
    })

    function refreshPage() {
        window.location.reload();
    }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        educationService.addEducation({
            jobSeeker: values.jobSeekerId,
            educationType: Number(values.educationType.educationTypeId),
            university: Number(values.university.id),
            faculty: Number(values.faculty.id),
            program: Number(values.program.programId),
            startedDate: values.startedDate,
            graduationDate: values.graduationDate,
        })
        handleModal(true);
        setTimeout(() => {
            resetForm();
        }, 100);
        //refreshPage();
    };

    const handleDelete = async (id) => {
        console.log(id);
        educationService.deleteEducation(id);
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
        <Container>
            <Segment>
            <Header as='h3' disabled dividing>
                    <Icon name='graduation' />
                    <Header.Content>Your Education History</Header.Content>
                </Header>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column>
                            <Formik>
                                <Form onSubmit={formik.handleSubmit}>
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            name="educationType"
                                            label="Education Type"
                                            placeholder='select education type'
                                            options={educationTypeOptions}
                                            onChange={(event, data) => handleChange("educationType", data.value)}
                                            value={formik.values.educationType}
                                        />

                                        {formik.errors.educationType && formik.touched.educationType && <span><Label basic pointing='above' color="orange" content={formik.errors.educationType} /><br /></span>}

                                        <Form.Select
                                            name="university"
                                            label=" University"
                                            placeholder='select university'
                                            options={universityOptions}
                                            onChange={(event, data) => handleChange("university", data.value)}
                                            value={formik.values.university}
                                        />
                                        {formik.errors.university && formik.touched.university && <span><Label basic pointing='above' color="orange" content={formik.errors.university} /><br /></span>}
                                        <Form.Select
                                            name="program"
                                            label="Program"
                                            placeholder='select program'
                                            options={programOptions}
                                            onChange={(event, data) => handleChange("program", data.value)}
                                            value={formik.values.program}
                                        />
                                        {formik.errors.program && formik.touched.program && <span><Label basic pointing='above' color="orange" content={formik.errors.program} /><br /></span>}
                                    </Form.Group>
                                    <Divider />
                                    <Form.Group widths='equal'>
                                        <Form.Select
                                            name="faculty"
                                            label="Faculty"
                                            placeholder='select faculty'
                                            options={facultyOptions}
                                            onChange={(event, data) => handleChange("faculty", data.value)}
                                            value={formik.values.faculty}
                                        />
                                        {formik.errors.faculty && formik.touched.faculty && <span><Label basic pointing='above' color="orange" content={formik.errors.faculty} /><br /></span>}
                                        <Form.Input
                                            name="startedDate"
                                            label="Started Date"
                                            placeholder='(YYYY-MM-DD)'
                                            icon='cogs'
                                            onChange={(event, data) => handleChange("startedDate", data.value)}
                                            value={formik.values.startedDate}
                                        />
                                        {formik.errors.startedDate && formik.touched.startedDate && <span><Label basic pointing='above' color="orange" content={formik.errors.startedDate} /><br /></span>}
                                        <Form.Input
                                            name="graduationDate"
                                            label="Graduation Date"
                                            placeholder='(YYYY-MM-DD)'
                                            icon='cog'
                                            onChange={(event, data) => handleChange("graduationDate", data.value)}
                                            value={formik.values.graduationDate}
                                        />
                                        {formik.errors.graduationDate && formik.touched.graduationDate && <span><Label basic pointing='above'
                                            color="orange" content={formik.errors.graduationDate} /><br /></span>}
                                    </Form.Group>
                                    <Button animated='fade' inverted color='orange' type='submit'>
                                        <Button.Content visible>Add</Button.Content>
                                        <Button.Content hidden>
                                            <Icon name='thumbtack' />
                                        </Button.Content>
                                    </Button>
                                </Form>
                            </Formik>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Table striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='2'>Your Education History</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {educations.map((education) =>
                                        <Table.Row key={education.educationId}>
                                            <Table.Cell>{education.jobSeekerId}</Table.Cell>
                                            <Table.Cell>{education.educationTypeName}</Table.Cell>
                                            <Table.Cell>{education.universityName}</Table.Cell>
                                            <Table.Cell>{education.programName}</Table.Cell>
                                            <Table.Cell>{education.facultyName}</Table.Cell>
                                            <Table.Cell>{education.startedDate}</Table.Cell>
                                            <Table.Cell>{education.graduationDate}</Table.Cell>
                                            <Table.Cell textAlign='right'>
                                                <Button icon inverted color="orange">
                                                    <Icon name='pencil' />
                                                </Button>
                                                <Button icon inverted color="orange"
                                                    onClick={() => handleDelete(education.educationId)}>
                                                    <Icon name='cancel' />
                                                </Button>
                                            </Table.Cell>
                                        </Table.Row>
                                    )}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Container>
    )
}

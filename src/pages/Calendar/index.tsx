import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import FullCalendar from '@fullcalendar/react';
import BootstrapTheme from '@fullcalendar/bootstrap';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

import React, {useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import {useAppDispatch} from '../../slices/hooks';
import {getEvents} from '../../slices/Calendar/actions';

const Calendar = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getEvents({start_date: '2024-02-01', end_date: '2024-03-31'}));
    }, []);

    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    const events = [
        {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'bg-primary-subtle text-primary',
        },
        {
            title: 'Visit Online Course',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            className: 'bg-warning-subtle text-warning',
        },
        {
            title: 'Client Meeting with Alexis',
            start: new Date(y, m, d + 22, 20, 0),
            end: new Date(y, m, d + 24, 16, 0),
            className: 'bg-danger-subtle text-danger',
        },
        {
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            end: new Date(y, m, d + 9, 16, 0),
            className: 'bg-primary-subtle text-primary',
        },
        {
            title: 'Meeting With Designer',
            start: new Date(y, m, d, 12, 30),
            className: 'bg-success-subtle text-success',
        },
        {
            title: 'Weekly Strategy Planning',
            start: new Date(y, m, d + 9),
            end: new Date(y, m, d + 11),
            className: 'bg-danger-subtle text-danger',
        },
        {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            className: 'bg-success-subtle text-success',
        },
        {
            title: 'Click for Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: 'bg-dark-subtle text-body',
        },
        {
            title: 'Velzon Project Discussion with Team',
            start: new Date(y, m, d + 23, 20, 0),
            end: new Date(y, m, d + 24, 16, 0),
            className: 'bg-info-subtle text-info',
        },
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Calendar" pageTitle="Apps"/>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xl={3}>
                                </Col>
                                <Col xl={9}>
                                    <Card className="card-h-100">
                                        <CardBody>
                                            <FullCalendar
                                                plugins={[
                                                    BootstrapTheme,
                                                    dayGridPlugin,
                                                    interactionPlugin,
                                                    listPlugin,
                                                    timeGridPlugin
                                                ]}
                                                initialView="dayGridMonth"
                                                slotDuration={'00:30:00'}
                                                handleWindowResize={true}
                                                themeSystem="bootstrap"
                                                headerToolbar={{
                                                    left: 'prev,next today',
                                                    center: 'title',
                                                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                                                }}
                                                events={events}
                                                editable={true}
                                                droppable={true}
                                                selectable={true}
                                                nowIndicator={true}
                                                slotLabelFormat={{
                                                    hour: 'numeric',
                                                    meridiem: 'lowercase'
                                                }}
                                                eventTextColor={'unset'}
                                                eventTimeFormat={{
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    meridiem: 'short'
                                                }}
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <div style={{clear: 'both'}}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Calendar;

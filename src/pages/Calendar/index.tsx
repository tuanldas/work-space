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
import {useSelector} from 'react-redux';
import {selectCalendarProperties} from '../../slices/Calendar/selector';

const Calendar = () => {
    const dispatch = useAppDispatch();
    const calendarState = useSelector(selectCalendarProperties)

    useEffect(() => {
        dispatch(getEvents({start_date: '2024-02-01', end_date: '2024-03-31'}));
    }, []);

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
                                                events={calendarState.items}
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

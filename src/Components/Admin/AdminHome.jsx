import React, { useEffect, useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import { Col, Container, Row } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Fade } from 'react-awesome-reveal';
import AnalyticsHook from '../../CustomHooks/Admin/Analytics-Hook';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const chartOptions = {
    elements: {
        line: {
            tension: 0.5,
        },
        point: {
            radius: 5,
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                color: '#ffffff',
                font: {
                    size: 12,
                },
            },
        },
        y: {
            grid: {
                color: '#444444',
                borderDash: [5, 5],
            },
            ticks: {
                color: '#ffffff',
                font: {
                    size: 12,
                },
                stepSize: 0,
                callback: function(value) {
                    return value % 1 === 0 ? value : '';
                },
            },
            min: 0,
        },
    },
    plugins: {
        legend: {
            labels: {
                color: '#ffffff',
                font: {
                    size: 14,
                },
            },
        },
        tooltip: {
            backgroundColor: '#333333',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#ffffff',
            borderWidth: 1,
        },
    },
};

const AdminHome = () => {
    const [Analytics, formatNumber] = AnalyticsHook();
    const [chartsInView, setChartsInView] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setChartsInView(prev => [...prev, entry.target]);
                }
            });
        }, { threshold: 0.1 });

        const charts = document.querySelectorAll('.chart');
        charts.forEach(chart => observer.observe(chart));

        return () => charts.forEach(chart => observer.unobserve(chart));
    }, []);

    // Sales chart data
    const salesAnalyticsData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Sales",
            data: [
                Analytics?.sales_analytics?.January || 0,
                Analytics?.sales_analytics?.February || 0,
                Analytics?.sales_analytics?.March || 0,
                Analytics?.sales_analytics?.April || 0,
                Analytics?.sales_analytics?.May || 0,
                Analytics?.sales_analytics?.June || 0,
                Analytics?.sales_analytics?.July || 0,
                Analytics?.sales_analytics?.August || 0,
                Analytics?.sales_analytics?.September || 0,
                Analytics?.sales_analytics?.October || 0,
                Analytics?.sales_analytics?.November || 0,
                Analytics?.sales_analytics?.December || 0,
            ],
            backgroundColor: "rgba(255, 87, 34, 0.2)",
            borderColor: "#ff5722",
            borderJoinStyle: "miter",
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#ff5722',
        }]
    };

    // Orders chart data
    const ordersAnalyticsData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: "Orders",
            data: [
                Analytics?.orders_analytics?.January || 0,
                Analytics?.orders_analytics?.February || 0,
                Analytics?.orders_analytics?.March || 0,
                Analytics?.orders_analytics?.April || 0,
                Analytics?.orders_analytics?.May || 0,
                Analytics?.orders_analytics?.June || 0,
                Analytics?.orders_analytics?.July || 0,
                Analytics?.orders_analytics?.August || 0,
                Analytics?.orders_analytics?.September || 0,
                Analytics?.orders_analytics?.October || 0,
                Analytics?.orders_analytics?.November || 0,
                Analytics?.orders_analytics?.December || 0,
            ],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "#36a2eb",
            borderJoinStyle: "miter",
            pointBorderColor: '#ffffff',
            pointBackgroundColor: '#36a2eb',
        }]
    };

    return (
        <main className='mt-auto admin-home admin-bg' dir='rtl' style={{ maxWidth: "100%", margin: "0 auto" }}>
            <Container>
                <Fade triggerOnce={true} direction='up'>
                    <Row>
                        <Col md="12">
                            <div className='text-container'>
                                <div className='admin-text'>
                                    <span className='mb-2 d-block'>المبيعات</span>
                                    <div className='d-flex align-items-center'>
                                        <FaArrowUpLong className='ms-1 mb-2' color="#32AF1E" />
                                        <h2>{Analytics ? formatNumber(Analytics.total_sales) : ""} <span>جنية</span></h2>
                                    </div>
                                </div>
                                <div className='admin-text'>
                                    <span className='mb-2 d-block'>الطلبات</span>
                                    <h2>{Analytics ? formatNumber(Analytics.new_orders) : ""} <span>طلب</span></h2>
                                </div>
                                <div className='admin-text'>
                                    <span className='mb-2 d-block'>العملاء</span>
                                    <h2>{Analytics ? formatNumber(Analytics.users) : ""} <span>عميل</span></h2>
                                </div>
                                <div className='admin-text'>
                                    <span className='mb-2 d-block'>العروض و الخصومات</span>
                                    <h2>{Analytics ? formatNumber(Analytics.offers) : ""} <span>عرض</span></h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <div className='statics'>
                                <div className='box d-flex flex-column justify-content-center chart'>
                                    <h4>المبيعات</h4>
                                    {chartsInView.includes(document.querySelector('.chart')) && (
                                        <Line
                                            data={salesAnalyticsData}
                                            options={chartOptions}
                                            aria-label="Sales chart"
                                        />
                                    )}
                                </div>
                                <div className='box d-flex flex-column justify-content-center chart'>
                                    <h4>الطلبات</h4>
                                    {chartsInView.includes(document.querySelector('.chart:nth-child(2)')) && (
                                        <Line
                                            data={ordersAnalyticsData}
                                            options={chartOptions}
                                            aria-label="Orders chart"
                                        />
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </main>
    );
}

export default AdminHome;

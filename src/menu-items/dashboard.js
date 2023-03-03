// assets
import {
    HomeOutlined,
    DashboardOutlined,
    CalendarOutlined,
    FormOutlined,
    StockOutlined,
    TeamOutlined,
    UserAddOutlined,
    DollarCircleOutlined,
    SendOutlined,
    PieChartOutlined,
    FileSyncOutlined,
    ReadOutlined,
    SettingOutlined
} from '@ant-design/icons';
// icons
const icons = {
    HomeOutlined,
    DashboardOutlined,
    CalendarOutlined,
    FormOutlined,
    StockOutlined,
    TeamOutlined,
    UserAddOutlined,
    DollarCircleOutlined,
    SendOutlined,
    PieChartOutlined,
    FileSyncOutlined,
    ReadOutlined,
    SettingOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Home',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        },
        {
            id: 'schedule',
            title: 'Schedule',
            type: 'item',
            icon: icons.CalendarOutlined,
            breadcrumbs: false
        },
        {
            id: 'tasks',
            title: 'Tasks',
            type: 'item',
            icon: icons.FormOutlined,
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            icon: icons.StockOutlined,
            breadcrumbs: false
        },
        {
            id: 'clients',
            title: 'Clients',
            type: 'item',
            icon: icons.TeamOutlined,
            breadcrumbs: false
        },
        {
            id: 'leads',
            title: 'Leads',
            type: 'item',
            icon: icons.UserAddOutlined,
            breadcrumbs: false
        },
        {
            id: 'finance',
            title: 'Finance',
            type: 'item',
            icon: icons.DollarCircleOutlined,
            breadcrumbs: false
        },
        {
            id: 'message',
            title: 'Message Center',
            type: 'item',
            icon: icons.SendOutlined,
            breadcrumbs: false
        },
        {
            id: 'insights',
            title: 'Insights',
            type: 'item',
            icon: icons.PieChartOutlined,
            breadcrumbs: false
        },
        {
            id: 'digital',
            title: 'Digital Forms',
            type: 'item',
            icon: icons.FileSyncOutlined,
            breadcrumbs: false
        },
        {
            id: 'logbook',
            title: 'Logbook',
            type: 'item',
            icon: icons.ReadOutlined,
            breadcrumbs: false
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            icon: icons.SettingOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

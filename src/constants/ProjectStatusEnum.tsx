enum ProjectStatusEnum {
    IN_PROGRESS = 1,
    COMPLETED = 2,
    CANCELLED = 3,
    PENDING = 4,
    OVERDUE = 5,
}

export class ProjectStatus {
    static getStatusName(status: number | ProjectStatusEnum | null): string {
        switch (status) {
            case ProjectStatusEnum.IN_PROGRESS:
                return 'In Progress';
            case ProjectStatusEnum.COMPLETED:
                return 'Completed';
            case ProjectStatusEnum.CANCELLED:
                return 'Cancelled';
            case ProjectStatusEnum.PENDING:
                return 'Pending';
            case ProjectStatusEnum.OVERDUE:
                return 'Overdue';
            default:
                return 'Unknown';
        }
    }

    static getClassname(status: number | ProjectStatusEnum | null): string {
        switch (status) {
            case ProjectStatusEnum.IN_PROGRESS:
                return 'badge-primary';
            case ProjectStatusEnum.COMPLETED:
                return 'badge-success';
            case ProjectStatusEnum.PENDING:
                return 'badge-light';
            case ProjectStatusEnum.CANCELLED:
            case ProjectStatusEnum.OVERDUE:
                return 'badge-danger';
            default:
                return 'primary';
        }
    }
}

export interface Report {
    reportId: number;
    reportType: string;
    generatedDate: Date;
    content: string;  // Could be a JSON or dynamic content
    employeeId: number;  // Relationship with the employee who generated the report
}

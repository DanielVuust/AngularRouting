namespace Backend.Data
{
    public static class DataContext
    {
        public static List<EmployeePayment> EmployeePayments = new List<EmployeePayment>()
        {
            new EmployeePayment("Joe", "Mama", 60000),
            new EmployeePayment("Morten", "Pedersen", 100000),
            new EmployeePayment("Jens", "Hansen", 2),
        };
    }
}

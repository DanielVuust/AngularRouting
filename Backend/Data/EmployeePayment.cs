namespace Backend.Data
{
    public class EmployeePayment
    {
        public EmployeePayment(string firstName, string lastName, int monthlyPay)
        {
            this.Id = Guid.NewGuid().ToString();
            this.FirstName = firstName;
            this.LastName = lastName;
            this.MonthlyPay = monthlyPay;
        }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int MonthlyPay { get; set; }

    }
}

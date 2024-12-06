export async function fetchUserByid(empId) {
    const response = await fetch('https://localhost:7095/api/Employees/' +empId);

    const resultData = await response.json();

    return resultData;
}
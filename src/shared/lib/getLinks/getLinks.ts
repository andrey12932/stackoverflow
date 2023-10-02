export function getUserLink(userId?: number) {
    return  userId ? `https://stackoverflow.com/users/${userId}` : '#';
}
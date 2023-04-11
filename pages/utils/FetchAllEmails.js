async function FetchAllEmails(userEmail, emailsToShow) {
  const response = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${userEmail}/messages`, {
    method: "GET",
    params: {
      maxResults: emailsToShow,
    },
  });

  console.log(response);
}

export default FetchAllEmails;

/**
 * check session exists in the organization application
 */
export default function ({ redirect, store, route }) {
  if (route.path === '/') {
    return redirect('/order/')
  }
}

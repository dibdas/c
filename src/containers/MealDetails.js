import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchMealById } from '../redux/actions/thunk';
import * as actionsType from '../redux/actions/actionTypes';
import { useParams } from 'react-router-dom';